import './App.css'
import Hero from './components/hero';
import Carrer from './components/carrer';
import Table from './components/table';
import Technologies from './components/technologies';
import MainContainer from './components/mainContainer';

export default function App() {

  return (
    <MainContainer>

      <Hero />

      <Technologies />

      <Carrer />

      <Table />

    </MainContainer>
  )
};