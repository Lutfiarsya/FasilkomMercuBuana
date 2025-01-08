import './index.css'
import MahasiswaPage from './pages/Mahasiswa';
import AdminPage from './pages/AdminPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './tools/protected';
import LoginPage from './pages/LoginPage';
import FailedReqPage from './pages/FailedReqPage';
import { useState } from 'react';
import DetailsPage from './Admin/DetailsPage';
import PageMBKM from './pages/Services/MbkmPage';
import DataDosen from './pages/DataDosen';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import DosenPage from './pages/DosenPage';
import PageTugasAkhir from './pages/Services/TugasAkhirPage';
import PageKerjaPraktik from './pages/Services/KerjaPraktikPage';
import Register from './pages/RegisterPage';
import CaptionProjectPage from './pages/Services/CPPage';

function App() {
const[IsLogin, setIsLogin] = useState(null)
const userAccess = JSON.parse(process.env.REACT_APP_USERS);
const admin = userAccess.admin
const mahasiswa = userAccess.mahasiswa
const dosen = userAccess.dosen

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={<LoginPage setIsLogin={setIsLogin} dosenUser={dosen} mahasiswaUser={mahasiswa} adminUser={admin} />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={
            <Protected IsLogin={IsLogin}>
              <AdminPage />
            </Protected>
            }/>
          <Route path='/mahasiswa' element={
            <Protected IsLogin={IsLogin}>
              <MahasiswaPage  />
            </Protected>
            }/>
            <Route path='/errorPage' element={<FailedReqPage/>}/>
            <Route path='/admin/details' element={
            <Protected IsLogin={IsLogin}>
              <DetailsPage />
            </Protected>
            }/>
            <Route path='/mahasiswa/form-MBKM' element={
            <Protected IsLogin={IsLogin}>
              <PageMBKM />
            </Protected>
            }/>
            <Route path='/mahasiswa/form-caption-project' element={
            <Protected IsLogin={IsLogin}>
              <CaptionProjectPage/>
            </Protected>
            }/>
            <Route path='/mahasiswa/form-tugas-akhir' element={
            <Protected IsLogin={IsLogin}>
              <PageTugasAkhir />
            </Protected>
            }/>
            <Route path='/mahasiswa/form-kerja-praktik' element={
            <Protected IsLogin={IsLogin}>
              <PageKerjaPraktik />
            </Protected>
            }/>
            <Route path='/data-dosen' element={
            <Protected IsLogin={IsLogin}>
              <DataDosen />
            </Protected>
            }/>
            <Route path='/profile/:username' element={
            <Protected IsLogin={IsLogin}>
              <Profile />
            </Protected>
            }/>
            <Route path='/dosen' element={
            <Protected IsLogin={IsLogin}>
              <DosenPage />
            </Protected>
            }/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
