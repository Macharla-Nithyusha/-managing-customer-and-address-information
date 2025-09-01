import React from 'react';

function AddressList({ addresses, onEdit, onDelete }) {
  if (!addresses.length) return <p>No addresses found.</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addresses.map(address => (
          <tr key={address.id}>
            <td>{address.street}</td>
            <td>{address.city}</td>
            <td>{address.state}</td>
            <td>{address.zip}</td>
            <td>
              <button onClick={() => onEdit(address)}>Edit</button>
              <button onClick={() => onDelete(address.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AddressList;
