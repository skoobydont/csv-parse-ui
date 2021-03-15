import React, { useState,  useEffect } from 'react';
import allData from './example-data.json';
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) setData(allData);
  }, []);
  console.log(data)
  return (
    <div className="App">
      <table>
        <thead>
          {Object.keys(data).map(key => <td>{key}</td>)}
        </thead>
        <tbody>
          {Object.map(
            obj => <tr>
              {Object.values(obj).map(val => <td>{obj[val]}:{val}</td>)}
              </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
