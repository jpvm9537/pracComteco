import './App.css'
import { NavBar } from './componetes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './vistas/Home/Home';
import { Personal } from './vistas/Personal/Personal';

function App() {

  return (
    <BrowserRouter>
      <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/routes' element={<h1>Routes</h1>}></Route>
        <Route path='/equipos' element={<h1>Equipos</h1>}></Route>
        <Route path='/personal' element={<Personal/>}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;