import React from 'react';
import PropTypes from 'prop-types';
// utils
import {
  monthToText,
  filterOutDanglingQuote,
  numberFormat
} from '../util/format';

const MonthlyStatsTable = props => {
  const { monthlyTransactions } = props;
  const monthName = monthToText(
    +filterOutDanglingQuote(monthlyTransactions[0].EffectiveDate).split('/')[0]
  );
  /**
   * Transactions That Are Type: Debit
   * @param {Array<Object>} t transaction
   * @returns {Array<Object>} transaction type = Debit
   */
  const debits = t => t.filter(tr => tr.TransactionType.includes('Debit'));
  const credits = t => t.filter(tr => tr.TransactionType.includes('Credit'));
  const other = t => t.filter(tr => (
    !tr.TransactionType.includes('Credit') && !tr.TransactionType.includes('Debit')
  ));
  const totalAbsoluteDebitValue = trs => (
    trs.filter(t => (parseFloat(t.Amount) < 0))
      .map(t => Math.abs(filterOutDanglingQuote(t.Amount)))
      .reduce((p, c) => p + c)
  );
  const totalAbsoluteCreditValue = trs => (
    trs.filter(t => (parseFloat(t.Amount) > 0))
      .map(t => Math.abs(filterOutDanglingQuote(t.Amount)))
      .reduce((p, c) => p + c)
  );
  // console.log(`${monthName} ${totalAbsoluteDebitValue(monthlyTransactions)}`);
  return (
    <table>
      <thead>
        <tr>
          <td colSpan={2}>
            {`${filterOutDanglingQuote(monthlyTransactions[0].EffectiveDate)} - 
              ${filterOutDanglingQuote(
                monthlyTransactions[monthlyTransactions.length-1].EffectiveDate
            )}`}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total:</td><td>{monthlyTransactions.length}</td>
          <td>Beginning Balance:</td><td>${
            numberFormat(+filterOutDanglingQuote(monthlyTransactions[0].Balance))
          }</td>
        </tr>
        <tr>
          <td>Credits:</td><td>{credits(monthlyTransactions).length}</td>
          <td>Absolute Credit Value:</td><td>${
            numberFormat(totalAbsoluteCreditValue(monthlyTransactions))
          }</td>
        </tr>
        <tr>
          <td>Debits:</td><td>{debits(monthlyTransactions).length}</td>
          <td>Absolute Debit Value:</td><td>$({
            numberFormat(totalAbsoluteDebitValue(monthlyTransactions))})</td>
        </tr>
        <tr>
          <td>(Other):</td><td>{other(monthlyTransactions).length}</td>
          <td>Ending Balance:</td><td>${
            numberFormat(+filterOutDanglingQuote(monthlyTransactions[monthlyTransactions.length-1].Balance))
          }</td>
        </tr>
      </tbody>
    </table>
  );
};

MonthlyStatsTable.propTypes = {
  monthlyTransactions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

MonthlyStatsTable.defaultProps = {
  monthlyTransactions: [],
};

export default MonthlyStatsTable;