import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import StoryCreation from './StoryCreation';
import CharacterPanel from './CharacterPanel';

import ProtectedRoute from './ProtectedRoute';

function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('isLoggedIn', 'false');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/:username" element={<Dashboard />} /> {/* Protect the route */}
        <Route path="/story-creation/:username" element={<StoryCreation />} />
        <Route path="/character-panel/:username" element={<CharacterPanel />} />
      </Route>
      <Route path="/register" element={<Register />} />
  
    </Routes>
  </BrowserRouter>
}

const Home = () => {
  return <div>hello world</div>
}


export default App;

