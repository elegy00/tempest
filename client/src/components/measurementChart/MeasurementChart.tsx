import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import { EnvironmentMeasurementFragment } from '../../graphql/types';

interface IProps {
  measurements: readonly EnvironmentMeasurementFragment[];
}

const MeasurementChart: React.FC<IProps> = (props) => {
  const { measurements } = props;
  return (
    <LineChart
      width={400}
      height={400}
      data={measurements}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="timestamp" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#ff7300"
        yAxisId={0}
      />
      <Line type="monotone" dataKey="humidity" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
};

export { MeasurementChart };
