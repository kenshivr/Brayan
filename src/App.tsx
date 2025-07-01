import './App.css'
import Home from '@src/pages/home';
import Report from '@src/pages/report';
import MainContainer from '@components/UI/mainContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/report' element={<Report/>} />
      </Routes>
    </BrowserRouter>
  )
};