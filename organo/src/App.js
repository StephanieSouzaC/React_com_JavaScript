import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Time from './componentes/Time/Time.js';
import Rodape from './componentes/Rodape/Rodape.js';

function App() {


  const times = [{
    nome: 'Programação',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
  }, {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  }, {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  }, {
    nome: 'DevOps',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  }, {
    nome: 'Ux e Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5'
  }, {
    nome: 'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9'
  }, {
    nome: 'Gestão e Inovação',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape/>

    </div>
  );
}

export default App;
