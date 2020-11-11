import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
} from '../../graphql/types';
import { MeasurementChart } from '../measurementChart/MeasurementChart';
import { RangeBounds } from '../rangeBounds/RangeBounds';
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
      <RangeBounds measurements={data?.measurements ?? []} />
      {data && <MeasurementChart measurements={data?.measurements ?? []} />}
    </div>
  );
};

export { Dashboard };
