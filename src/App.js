import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import UserList from './UserList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee-productivity-dashboard" element={<Dashboard />} />
        <Route path="/employee-list" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;