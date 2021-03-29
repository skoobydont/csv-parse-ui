import React from 'react';
import { useParams } from 'react-router';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { year, month } = useParams();
  return (
    <div>{year} : {month}</div>
  )
}