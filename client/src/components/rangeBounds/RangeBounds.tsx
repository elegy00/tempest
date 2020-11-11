import React from 'react';
import { EnvironmentMeasurementFragment } from '../../graphql/types';
import { useMeasurementBounds } from '../../hooks/useMeasurementBounds';
import { RangeBoundsEntry } from './RangeBoundsEntry';
import styled from 'styled-components';

interface IProps {
  measurements: readonly EnvironmentMeasurementFragment[];
}

const BoundsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;

  padding: 24px;
`;

const RangeBounds: React.FC<IProps> = (props) => {
  const { measurements } = props;

  const bounds = useMeasurementBounds([...measurements]);
  if (measurements.length === 0 || !bounds) {
    return <div>no data</div>;
  }
  const latestMeasurement = [...measurements].sort(
    (a, b) => a.timestamp - b.timestamp
  )[0];

  return (
    <BoundsWrapper>
      <div>Label</div>
      <div>Lowest</div>
      <div>Current</div>
      <div>Highest</div>
      <RangeBoundsEntry
        label="temperature"
        lowest={bounds.temperature.lowest}
        highest={bounds.temperature.highest}
        current={latestMeasurement.temperature}
      />
      <RangeBoundsEntry
        label="humidity"
        lowest={bounds.humidity.lowest}
        highest={bounds.humidity.highest}
        current={latestMeasurement.humidity}
      />
      <RangeBoundsEntry
        label="pressure"
        lowest={bounds.pressure.lowest}
        highest={bounds.pressure.highest}
        current={latestMeasurement.pressure}
      />
    </BoundsWrapper>
  );
};

export { RangeBounds };
