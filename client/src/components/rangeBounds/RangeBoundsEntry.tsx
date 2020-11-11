import React from 'react';

interface IProps {
  label: string;
  highest: number;
  lowest: number;
  current: number;
}

const RangeBoundsEntry: React.FC<IProps> = (props) => {
  const { label, highest, lowest, current } = props;

  return (
    <>
      <div>{label}</div>
      <div>{lowest}</div>
      <div>{current}</div>
      <div>{highest}</div>
    </>
  );
};

export { RangeBoundsEntry };
