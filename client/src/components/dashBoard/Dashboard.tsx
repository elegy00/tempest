import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
  FetchMeasurements_measurements,
} from '../../graphql/types';
import { MeasurementChart } from '../measurementChart/MeasurementChart';
import { RangeBounds } from '../rangeBounds/RangeBounds';
import { FETCH_MEASUREMENTS } from './query';

const Datapoint = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

interface SensorData {
  name: string;
  topic: string;
  measurements: FetchMeasurements_measurements[];
}

interface NameMapType {
  [key: string]: string;
}
const NameMap: NameMapType = {
  'zigbee2mqtt/0x00158d00056a33c3': 'Büro',
  'zigbee2mqtt/0x00158d000543b0d9': 'Elternschlafzimmer',
  'zigbee2mqtt/0x00158d000543b101': 'Gartehüüsli',
  'zigbee2mqtt/0x00158d00052dbf2f': 'Werkzeugkeller',
  'zigbee2mqtt/0x00158d00054411fa': 'Hauseingang',
  'zigbee2mqtt/0x00158d000543b0d6': 'Vorratskeller',
  'zigbee2mqtt/0x00158d00051e0ec8': 'Stube',
};

const Dashboard: React.FC = () => {
  const timeRange = new Date();
  timeRange.setDate(timeRange.getDate() - 1);
  const [startDate] = useState(timeRange);

  const { data } = useQuery<FetchMeasurements, FetchMeasurementsVariables>(
    FETCH_MEASUREMENTS,
    {
      variables: { filter: { timestamp_gte: startDate.toISOString() } },
      pollInterval: 30000,
    }
  );

  const groupedMeasurements: SensorData[] =
    data?.measurements.reduce<SensorData[]>((sensorData, next) => {
      const match = sensorData.find((sd) => sd.topic === next.topic);
      if (match) {
        match.measurements.push(next);
        return sensorData;
      }
      sensorData.push({
        name: NameMap[next.topic],
        topic: next.topic,
        measurements: [next],
      });
      return sensorData;
    }, []) ?? [];

  return (
    <>
      {groupedMeasurements.map((gm) => (
        <Datapoint key={gm.name}>
          <h3>{gm.name}</h3>
          <RangeBounds measurements={gm.measurements} />
          {data && <MeasurementChart measurements={gm.measurements} />}
        </Datapoint>
      ))}
    </>
  );
};

export { Dashboard };
