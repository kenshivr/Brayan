import './App.css'
import Hero from './components/section/hero';
import Carrer from './components/section/carrer';
import Table from './components/section/table';
import Technologies from './components/section/technologies';
import MainContainer from './components/section/mainContainer';

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