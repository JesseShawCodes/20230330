import './App.scss';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from './pages/NotFoundPage';
import MusicListPage from './pages/MusicPage';

/* Test Features */
import SearchPage from './pages/SearchPage';
import { Counter } from './features/counter';
import SaveButton from './pages/TestHooks';
/*https://dev.to/raaynaldo/rtk-query-tutorial-crud-51hl*/
import Albums from './components/Albums';
import Pokemon from './pages/TestRtk';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/music_list" element={<MusicListPage />} />
            {/* Test Page */}
            {/*<!----- Test Search Page ---->*/}
            <Route path="/search" element={<SearchPage />} />
            {/*<!----- Test Redux  Page ---->*/}
            <Route path="/counter_redux" element={< Counter />}/>
            {/*Test Hooks */}
            <Route path="test_hook" element={<SaveButton />} />
            {/*Test RTK SEARCH */}
            {/* Test CRUD search*/}
            <Route path="/test_albums" element={<Albums />} />
            <Route path="/test_search" element={<Pokemon />} />
            {/* End Test Pages */}
            <Route path="/articles/:articleId" element={<ArticlePage />} />
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
