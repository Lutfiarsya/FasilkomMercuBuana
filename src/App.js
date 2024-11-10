import './index.css'
import MahasiswaPage from './pages/Mahasiswa';
import AdminPage from './pages/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './tools/protected';
import LoginPage from './pages/LoginPage';
import FailedReqPage from './pages/FailedReqPage';
import { useState } from 'react';

function App() {
  const[IsLogin, setIsLogin] = useState(null)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage setIsLogin={setIsLogin}/>}/>
          <Route path='/admin' element={
              <AdminPage />
            }/>
          <Route path='/mahasiswa' element={
              <MahasiswaPage />
            }/>
            <Route path='/errorPage' element={<FailedReqPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
