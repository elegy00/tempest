import { useMemo } from 'react';
import { EnvironmentMeasurementFragment } from '../graphql/types';

interface Bounds {
  highest: number;
  lowest: number;
}

interface UseMeasurementBounds {
  pressure: Bounds;
  temperature: Bounds;
  humidity: Bounds;
}

const updateBounds = (oldBounds: Bounds, value: number): Bounds => {
  return {
    highest: Math.max(oldBounds.highest, value),
    lowest: Math.min(oldBounds.lowest, value),
  };
};

const useMeasurementBounds = (
  measurements: EnvironmentMeasurementFragment[]
): UseMeasurementBounds | null => {
  const groupedValues: UseMeasurementBounds | null = useMemo(() => {
    if (measurements.length === 0) {
      return null;
    }

    const result: UseMeasurementBounds = {
      humidity: {
        highest: measurements[0].humidity,
        lowest: measurements[0].humidity,
      },
      temperature: {
        highest: measurements[0].temperature,
        lowest: measurements[0].temperature,
      },
      pressure: {
        highest: measurements[0].pressure,
        lowest: measurements[0].pressure,
      },
    };

    measurements.forEach((mes) => {
      result.humidity = updateBounds(result.humidity, mes.humidity);
      result.temperature = updateBounds(result.temperature, mes.temperature);
      result.pressure = updateBounds(result.pressure, mes.pressure);
    });
    return result;
  }, [measurements]);

  return groupedValues;
};

export { useMeasurementBounds };
