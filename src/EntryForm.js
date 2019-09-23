import React, { useContext } from 'react';
import { EntryContext } from './App';

const EntryForm = () => {
  const [entryFormValues, handleChange, handleSubmit] = useContext(EntryContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Last Name: <input type="text" name="lastName" defaultValue={entryFormValues.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        First Name: <input type="text" name="firstName" defaultValue={entryFormValues.firstName} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default EntryForm;
