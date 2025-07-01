// import './App.css'
// import Home from '@src/pages/home';
// import MainContainer from './components/UI/mainContainer';

// export default function App() {

//   return (
//     <MainContainer>
//       <Home />
//     </MainContainer>
//   )
// };

import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainContainer from '@components/UI/mainContainer';
import Home from '@pages/home';
import Report from '@pages/report';

export default function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </MainContainer>
  );
}
