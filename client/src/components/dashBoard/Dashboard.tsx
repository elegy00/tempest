import { useQuery } from '@apollo/client';
import React from 'react';
import { FETCH_MEASUREMENTS } from './query';

const Dashboard: React.FC = () => {
  const { data, loading } = useQuery(FETCH_MEASUREMENTS);
  console.log(data);
  return <div></div>;
};

export { Dashboard };
