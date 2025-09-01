import React, { useState, useEffect } from 'react';

function AddressForm({ initialData, onSubmit, onCancel }) {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  useEffect(() => {
    if (initialData) {
      setStreet(initialData.street || '');
      setCity(initialData.city || '');
      setState(initialData.state || '');
      setZip(initialData.zip || '');
    } else {
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ street, city, state, zip });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>{initialData ? 'Edit Address' : 'Add Address'}</h4>
      <div>
        <label>Street: </label>
        <input value={street} onChange={(e) => setStreet(e.target.value)} required />
      </div>
      <div>
        <label>City: </label>
        <input value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div>
        <label>State: </label>
        <input value={state} onChange={(e) => setState(e.target.value)} required />
      </div>
      <div>
        <label>Zip: </label>
        <input value={zip} onChange={(e) => setZip(e.target.value)} required />
      </div>
      <button type="submit">{initialData ? 'Update' : 'Add'}</button>
      {initialData && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default AddressForm;
