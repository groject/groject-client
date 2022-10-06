import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as C from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<C.Main />} />
          <Route path='/signup' element={<C.Signup />} />
          <Route path='/login' element={<C.Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
