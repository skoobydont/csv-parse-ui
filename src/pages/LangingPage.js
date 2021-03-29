import React, { useState, useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import allData from '../data.json';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) setData(allData);
    console.log(Object.keys(allData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log(data)
  return (
    <>
      {data && Object.keys(allData).map(year => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${year}-content`}
            id={`${year}-id`}>
            {year}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link to={`/${year}`}>{year}</Link>
              {Object?.keys(allData[year])?.map(month => {
                return <li>
                    <Link to={`/${year}/${month}`}>{month}: {data[year][month].length}</Link>
                  </li>
              })}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </>
  )
}