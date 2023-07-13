import './App.scss';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import NotFoundPage from './pages/NotFoundPage';

import ArtistPage from './pages/ArtistPage';

/* Test Features */
/*https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl*/
import Albums from './pages/Albums';
import HookTest from './pages/HookTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Test Page */}
            {/*<!----- Test Search Page ---->*/}
            {/*Test Hooks */}
            {/*Test RTK SEARCH */}
            {/* Test CRUD search*/}
            <Route path="/music_search" element={<Albums />} />
            <Route path="/hooks_test" element={<HookTest />} />
            {/* End Test Pages */}
            <Route path="/artist/:handle" element={<ArtistPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create_account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
