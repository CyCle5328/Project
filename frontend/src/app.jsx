import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/Pages/main/main';
import Artlist from './component/Pages/list/artlist';
import Join from './component/Pages/join/join';
import Login from './component/Pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/discover" element={<Artlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
