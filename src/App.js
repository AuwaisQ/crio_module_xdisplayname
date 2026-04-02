import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: ''
  });

  const validateField = (name, value) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      return `${name} is required`;
    }
    if (trimmedValue.length < 2) {
      return `${name} must be at least 2 characters`;
    }
    return '';
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    const fieldName = name === 'firstName' ? 'First Name' : 'Last Name';
    const error = validateField(fieldName, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const firstNameError = validateField('First Name', formData.firstName);
    const lastNameError = validateField('Last Name', formData.lastName);
    
    setErrors({
      firstName: firstNameError,
      lastName: lastNameError
    });

    if (firstNameError || lastNameError) {
      return;
    }

    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
    alert(`Full Name: ${fullName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form className="form" onSubmit={submitHandler}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>

      <h3>Full Name: {formData.firstName} {formData.lastName}</h3>
    </div>
  );
}

export default App;

