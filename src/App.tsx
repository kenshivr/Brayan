import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/home';
import Components from '@src/pages/components';
import Report from '@pages/report';
import Proyects from '@pages/proyects';
import NotFound from '@pages/notFound';
import MainContainer from '@components/UI/mainContainer';

import { useThemeStore } from './context/themeStore';
import { useEffect } from 'react';

export default function App() {
  const applyTheme = useThemeStore((state) => state.applyTheme);

  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/components" element={<Components />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  );
}
