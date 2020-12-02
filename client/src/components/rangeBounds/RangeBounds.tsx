import React from "react";
import { EnvironmentMeasurementFragment } from "../../graphql/types";
import { useMeasurementBounds } from "../../hooks/useMeasurementBounds";
import { RangeBoundsEntry } from "./RangeBoundsEntry";
import styled from "styled-components";

interface IProps {
  measurements: readonly EnvironmentMeasurementFragment[];
}

const BoundsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;

  padding: 24px;
`;

const RangeBounds: React.FC<IProps> = (props) => {
  const { measurements } = props;

  const bounds = useMeasurementBounds([...measurements]);
  if (measurements.length === 0 || !bounds) {
    return <div>no data</div>;
  }
  const latestMeasurement = [...measurements].sort(
    (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
  )[0];

  console.log(latestMeasurement);

  return (
    <BoundsWrapper>
      <div></div>
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
    </BoundsWrapper>
  );
};

export { RangeBounds };
