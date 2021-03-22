import React, { useState,  useEffect } from 'react';
import allData from './example-data.json';
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) setData(allData.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  console.log(data)
  return (
    <div className="App">
      {data === null
      ? <div>Loading...</div>
      : <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map(key => <td>{key}</td>)}
            </tr>
          </thead>
          <tbody>
            {data.map(
              obj => <tr>
                {Object.values(obj).map(val => <td>{obj[val]}:{val}</td>)}
                </tr>)}
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
