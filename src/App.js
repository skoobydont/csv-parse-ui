import React, { useState,  useEffect } from 'react';
import allData from './example-data.json';
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data === null) setData(allData);
  }, [data]);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
