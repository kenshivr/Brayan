import './App.css'
import Hero from './components/hero';
import Technologies from './components/technologies';
import MainContainer from './components/mainContainer';

export default function App() {

  return (
    <MainContainer>

      <Hero />

      <Technologies />

    </MainContainer>
  )
};