import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { year } = useParams();
  return <div>{year} Page</div>
}