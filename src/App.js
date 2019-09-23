import React, { useState, createContext } from 'react';

import EntryForm from './EntryForm';

export const EntryContext = createContext([
  {
    lastName: '',
    firstName: ''
  },
  () => {},
  () => {}
]);

const App = () => {
  const [formValues, setFormValues] = useState({
    lastName: 'aaa',
    firstName: 'bbb'
  });

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <EntryContext.Provider value={[formValues, handleChange, handleSubmit]}>
      <EntryForm />
    </EntryContext.Provider>
  );
}

export default App;
