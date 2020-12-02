import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
  FetchMeasurements_measurements,
} from "../../graphql/types";
import { MeasurementChart } from "../measurementChart/MeasurementChart";
import { RangeBounds } from "../rangeBounds/RangeBounds";
import { FETCH_MEASUREMENTS } from "./query";

const Datapoint = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

interface SensorData {
  name: string;
  measurements: FetchMeasurements_measurements[];
}
const Dashboard: React.FC = () => {
  const timeRange = new Date();
  timeRange.setDate(timeRange.getDate() - 1);
  const [startDate] = useState(timeRange);

  const { data } = useQuery<FetchMeasurements, FetchMeasurementsVariables>(
    FETCH_MEASUREMENTS,
    {
      variables: { filter: { timestamp_gte: startDate.toISOString() } },
      pollInterval: 5000,
    }
  );

  const groupedMeasurements: SensorData[] =
    data?.measurements.reduce<SensorData[]>((sensorData, next) => {
      const match = sensorData.find((sd) => sd.name === next.topic);
      if (match) {
        match.measurements.push(next);
        return sensorData;
      }
      sensorData.push({ name: next.topic, measurements: [next] });
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
