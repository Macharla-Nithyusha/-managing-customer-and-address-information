import React, { useState, useEffect } from 'react';

function CustomerForm({ initialData, onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.first_name || '');
      setLastName(initialData.last_name || '');
      setPhoneNumber(initialData.phone_number || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ first_name: firstName, last_name: lastName, phone_number: phoneNumber });
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name: </label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name: </label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number: </label>
        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default CustomerForm;
