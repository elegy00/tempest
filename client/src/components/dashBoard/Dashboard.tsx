import { useQuery } from '@apollo/client';
import React, { useMemo, useState } from 'react';
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
} from '../../graphql/types';
import { FETCH_MEASUREMENTS } from './query';

import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';

const Dashboard: React.FC = () => {
  //   const initialDate = useMemo(() => {
  //     const timeRange = new Date();
  //     timeRange.setDate(timeRange.getDate() - 1);
  //     return timeRange;
  //   }, []);

  const timeRange = new Date();
  timeRange.setDate(timeRange.getDate() - 1);
  const [startDate, setStartDate] = useState(timeRange);

  const { data, loading } = useQuery<
    FetchMeasurements,
    FetchMeasurementsVariables
  >(FETCH_MEASUREMENTS, {
    variables: { filter: { timestamp_gte: startDate } },
    pollInterval: 5000,
  });
  console.log(data);

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
