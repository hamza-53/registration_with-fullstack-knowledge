import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const wasReloaded = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (wasReloaded) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;