import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as C from './components';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<C.Main />} />
          <Route path='/signup' element={<C.Signup />} />
          <Route path='/login' element={<C.Login />} />
          <Route path='/worker' element={<C.Worker />} />
          <Route path='/capsule' element={<C.Capsule />} />
          <Route path='/my' element={<C.MyPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
