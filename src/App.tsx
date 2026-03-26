import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '@pages/notFound';
import MainContainer from '@components/UI/mainContainer';

import { useThemeStore } from './context/themeStore';

const Home       = lazy(() => import('@pages/home'));
const CV         = lazy(() => import('@pages/cv'));
const Report     = lazy(() => import('@pages/report'));
const Proyects   = lazy(() => import('@pages/proyects'));
const Components = lazy(() => import('@pages/components'));

export default function App() {
  const applyTheme = useThemeStore((state) => state.applyTheme);

  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <MainContainer>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/components" element={<Components />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainContainer>
  );
};