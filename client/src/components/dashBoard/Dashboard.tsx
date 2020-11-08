import { useQuery } from '@apollo/client';
import React from 'react';
import {
  FetchMeasurements,
  FetchMeasurementsVariables,
} from '../../graphql/types';
import { FETCH_MEASUREMENTS } from './query';

const Dashboard: React.FC = () => {
  const { data, loading } = useQuery<
    FetchMeasurements,
    FetchMeasurementsVariables
  >(FETCH_MEASUREMENTS);
  console.log(data);
  return <div></div>;
};

export { Dashboard };
