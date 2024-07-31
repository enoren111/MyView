import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login';
import Dashboard from './Dashboard';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/:username" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
}

const Home = () => {
  return <div>hello world</div>
}

const About = () => {
  return <div>这里是卡拉云的主页</div>
}


export default App;

