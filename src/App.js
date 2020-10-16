import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import Dashboard from './dashboard';
function App() {
  //estado do arquivo CSV
  const [Csv, setCsv] = useState(['']);
  //setando o arquivo no useState
  const handlechange = (event) => {
    if (event.target.files[0]) {
      setCsv(event.target.files[0]);
    }
  };
  const changeUpload = async () => {
    //papaper é function assincrona
    const resulte = await Papa.parse(Csv, {
      //mostrando cabeçalho
      header: true,
      //escolhendo delimitador
      delimiter: ';',
      //listando os valores da planilha
      complete: (results, file) => {
        console.log('Resultado :', results.data);
        //filtrando os valores do arquivo CSV
        const teste = results.data.filter((e) => {
          return e.name == 'luiz';
        });
        console.log('TESTE :', teste);
      },
    });
  };

  const handlechartjs = () => {};
  return (
    <div className="App">
      <h2> Insira o arquivo para tratar os dados</h2>
      <header className="App-header">
        <h3>INSIRA ARQUIVO CSV</h3>
        <Dashboard />
        <input
          accept=".csv"
          type="file"
          name="file"
          className="input-upload"
          onChange={handlechange}
        />
        <button className="btn-csv" onClick={changeUpload}>
          Enviar
        </button>
      </header>
      <div className="valores-container"></div>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
