import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import {
  ExpandMoreIcon,
} from '@material-ui/icons';
import allData from '../data.json';
// util
import { filterOutDanglingQuote, monthToText } from '../util/format';
/**
 * Year Page. show some stats & enjoy some sleep. soon plz
 * @constant
 * @returns {Component} Year Page
 */
const YearPage = () => {
  const { year } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null && allData) {
      // just data for this year
      setData(allData[year]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (data === null) return <CircularProgress color='primary' />
  console.log(data);
  // dont want to check for data === null each time
  // so only do this under the above check so nothing complains
  const totalTransactions = Object.keys(data).map(month => data[month].length).reduce((prev, curr) => prev + curr);
  const beginningBalanceDate = filterOutDanglingQuote(data[1][0].EffectiveDate);
  const endingBalanceDate = filterOutDanglingQuote(data[12][(data[12].length - 1)].EffectiveDate);
  return (
    <>
      <>{year} Page</>
      <br />
      <>
        {`Total Transactions: ${totalTransactions}`}
      </>
      <br />
      <>
        {`Beginning Date: ${beginningBalanceDate}`}
      </>
      <br />
      <>
        {`Ending Date: ${endingBalanceDate}`}
      </>
      {Object.keys(data).map(month => (
        <Accordion key={month}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${month}-content`}
            id={`${month}-id`}>
            {monthToText(month)}
          </AccordionSummary>
          <AccordionDetails>
            {/** TODO: map over each month & show various calculations */}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default YearPage;
