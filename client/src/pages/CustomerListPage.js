import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomers, deleteCustomer } from '../services/api';
import CustomerList from '../components/CustomerList';

function CustomerListPage() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data.data);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    fetchCustomers();
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <CustomerList customers={customers} onDelete={handleDelete} onView={(id) => navigate(`/customers/${id}`)} onEdit={(id) => navigate(`/edit/${id}`)} />
    </div>
  );
}

export default CustomerListPage;
