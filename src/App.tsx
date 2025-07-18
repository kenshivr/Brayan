import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/home';
import Test from '@pages/test';
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
        <Route path="/test" element={<Test />} />
      </Routes>
    </MainContainer>
  );
}
