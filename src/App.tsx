import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/home';
import Report from '@pages/report';
import Proyects from '@pages/proyects';
import MainContainer from '@components/UI/mainContainer';

export default function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </MainContainer>
  );
}
