import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomer, getAddresses, createAddress, updateAddress, deleteAddress } from '../services/api';
import AddressList from '../components/AddressList';
import AddressForm from '../components/AddressForm';

function CustomerDetailPage() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);

  const fetchData = async () => {
    const customerRes = await getCustomer(id);
    setCustomer(customerRes.data.data);
    const addressRes = await getAddresses(id);
    setAddresses(addressRes.data.data);
  };

  const handleAddAddress = async (data) => {
    await createAddress(id, data);
    fetchData();
  };

  const handleUpdateAddress = async (data) => {
    await updateAddress(editingAddress.id, data);
    setEditingAddress(null);
    fetchData();
  };

  const handleDeleteAddress = async (addressId) => {
    await deleteAddress(addressId);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>{customer.first_name} {customer.last_name}</h2>
      <p>Phone: {customer.phone_number}</p>

      <h3>Addresses</h3>
      <AddressList addresses={addresses} onEdit={setEditingAddress} onDelete={handleDeleteAddress} />
      <AddressForm
        initialData={editingAddress}
        onSubmit={editingAddress ? handleUpdateAddress : handleAddAddress}
        onCancel={() => setEditingAddress(null)}
      />
    </div>
  );
}

export default CustomerDetailPage;
