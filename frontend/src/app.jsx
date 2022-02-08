import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/Pages/main/main';
import Artlist from './component/Pages/list/artlist';
import Join from './component/Pages/join/join';
import Login from './component/Pages/login/login';
import Navbar from './component/navbar/navbar';
import Footer from './component/footer/footer';
import ArtDetail from './component/Pages/detail/artDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/discover" element={<Artlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/detail/:artNo" element={<ArtDetail />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
