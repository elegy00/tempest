import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
} from '../../graphql/types';
import { FETCH_MEASUREMENTS } from './query';

const Dashboard: React.FC = () => {
  const timeRange = new Date();
  timeRange.setDate(timeRange.getDate() - 1);
  const [startDate] = useState(timeRange);

  const { data } = useQuery<FetchMeasurements, FetchMeasurementsVariables>(
    FETCH_MEASUREMENTS,
    {
      variables: { filter: { timestamp_gte: startDate } },
      pollInterval: 5000,
    }
  );

  return (
    <div>
      <LineChart
        width={600}
        height={400}
        data={data?.measurements ?? []}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="timestamp" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="humidity" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pressure" stroke="#387908" yAxisId={1} />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#ff00ff"
          yAxisId={2}
        />
      </LineChart>
    </div>
  );
};

export { Dashboard };
