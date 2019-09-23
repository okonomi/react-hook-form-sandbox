import React, { useState } from 'react';

const App = () => {
  const [formValues, setFormValues] = useState({
    lastName: '',
    firstName: ''
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Last Name: <input type="text" name="lastName" onChange={handleChange} />
        </label>
        <br />
        <label>
          First Name: <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
