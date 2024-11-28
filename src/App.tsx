import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from 'pages/Projects';
import Profile from 'pages/Profile';
import Highlights from 'pages/Highlights';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
