import './App.css'
import { NavBar } from './componetes/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './vistas/Home/Home';
import { Personal } from './vistas/Personal/Personal';
import { Login } from './vistas/Login/Login';

function App() {

  return (
    <BrowserRouter>
      <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reportes' element={<h1>Reportes</h1>}></Route>
        <Route path='/registrar' element={<h1>Registrar</h1>}></Route>
        <Route path='/personal' element={<Personal/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;