import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCustomer, getCustomer, updateCustomer } from '../services/api';
import CustomerForm from '../components/CustomerForm';

function CustomerFormPage() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCustomer(id).then(res => setInitialData(res.data.data));
    }
  }, [id]);

  const handleSubmit = async (data) => {
    if (id) {
      await updateCustomer(id, data);
    } else {
      await createCustomer(data);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{id ? "Edit Customer" : "Add Customer"}</h2>
      <CustomerForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
}

export default CustomerFormPage;
