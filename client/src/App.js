import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomerListPage from './pages/CustomerListPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerFormPage from './pages/CustomerFormPage';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Customer Management App</h1>
      <nav>
        <Link to="/">Customer List</Link> | <Link to="/add">Add Customer</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CustomerListPage />} />
        <Route path="/add" element={<CustomerFormPage />} />
        <Route path="/edit/:id" element={<CustomerFormPage />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
