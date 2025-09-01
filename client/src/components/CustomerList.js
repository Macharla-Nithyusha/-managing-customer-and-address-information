import React from 'react';

function CustomerList({ customers, onView, onEdit, onDelete }) {
  if (!customers.length) return <p>No customers found.</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td>{customer.first_name} {customer.last_name}</td>
            <td>{customer.phone_number}</td>
            <td>
              <button onClick={() => onView(customer.id)}>View</button>
              <button onClick={() => onEdit(customer.id)}>Edit</button>
              <button onClick={() => onDelete(customer.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerList;
