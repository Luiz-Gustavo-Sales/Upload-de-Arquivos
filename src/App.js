import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';

import Dashboard from './dashboard';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function App() {
  //estado do arquivo CSV
  const [Csv, setCsv] = useState(['']);
  const [dados, setDados] = useState(['']);
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
        setDados(results.data);
        console.log('Aqui log do state DADOS ', dados);
        console.log('Resultado :', results.data);
        //filtrando os valores do arquivo CSV
        // const teste = results.data.filter((e) => {
        //   return e.name == 'luiz';
        // });
        // console.log('TESTE :', teste);
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
      <div className="graficos">
        <BarChart
          width={600}
          height={300}
          data={dados}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/*metricas laterias*/}
          <YAxis />
          {/*Ação passar mouse por cima*/}
          <Tooltip />
          <Legend />
          <Bar dataKey="idade" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" />*/}
        </BarChart>
      </div>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
