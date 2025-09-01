import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getCustomers = () => axios.get(`${API_BASE}/customers`);
export const getCustomer = (id) => axios.get(`${API_BASE}/customers/${id}`);
export const createCustomer = (data) => axios.post(`${API_BASE}/customers`, data);
export const updateCustomer = (id, data) => axios.put(`${API_BASE}/customers/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_BASE}/customers/${id}`);

export const getAddresses = (customerId) => axios.get(`${API_BASE}/customers/${customerId}/addresses`);
export const createAddress = (customerId, data) => axios.post(`${API_BASE}/customers/${customerId}/addresses`, data);
export const updateAddress = (addressId, data) => axios.put(`${API_BASE}/addresses/${addressId}`, data);
export const deleteAddress = (addressId) => axios.delete(`${API_BASE}/addresses/${addressId}`);
