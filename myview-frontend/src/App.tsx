import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/:username" element={<Dashboard />} /> {/* Protect the route */}
        </Route>
    </Routes>
  </BrowserRouter>
}

const Home = () => {
  return <div>hello world</div>
}


export default App;

