import { fs } from 'fs';
//helper
const removeSpaces = word => word.split(' ').join('');
//main
export const parse = () => {
  let read = fs();
  const result = read.readFile('./ExportedTransactions.csv', 'utf8', (err, data) => {
    if (err) console.log(err);
    //the resulting array of objects
    let result = [];
    //remove line breaks
    const rows = data.split('\r\n');
    //headers are first row. remove excess quotes
    const headers = rows[0].split('"').join('').split(',');
    //start with second row of csv (first row of data)
    let index = 1;
    while (index < 5) {
      let valIndex = 0;
      //placeholder object
      let obj = {};
      //grab row of values at index
      const values = rows[index].split('",');
      //loop through each value column & assign to header
      while (valIndex < headers.length) {
        //remove spaces for attribute naming
        obj[removeSpaces(headers[valIndex])] = values[valIndex].split('"').join('');
        valIndex++;
      }
      //push created object to result array
      result.push(obj);
      index++;
    }
    //then send back array of results
    return result;
  });
  return result;
};

export default parse;
