import React, { useState } from 'react';
import './App.css';
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
import Papa from 'papaparse';
function App() {
  const [Csv, setCsv] = useState(['']);

  const handlechange = (event) => {
    if (event.target.files[0] != '') {
      setCsv({ file: event.target.files[0] });
    }
  };
  const changeUpload = () => {
    console.log('olha aqui ', Csv);
    Papa.parse(
      Csv,
      {
        worker: true,
      },
      function (resultingBlob) {
        console.log('OLHA AQUIIIIII', resultingBlob);
      }
    );
  };
  return (
    <div className="App">
      <h2> Insira o arquivo para tratar os dados</h2>
      <header className="App-header">
        <input
          accept=".csv"
          type="file"
          name="file"
          className="input-upload"
          onChange={handlechange}
        />
        <button onClick={changeUpload}>Enviar</button>
      </header>
    </div>
  );
}
export default App;
