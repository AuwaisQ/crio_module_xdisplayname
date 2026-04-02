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
    if (!value.trim()) {
      return `${name} is required`;
    }
    if (value.trim().length < 2) {
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

    const error = validateField(name === 'firstName' ? 'First Name' : 'Last Name', value);
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

    const fullName = `${formData.firstName} ${formData.lastName}`;
    alert(`Full Name: ${fullName}`);
  };

  return (
    <div className="App">
      <h1>Full Display Name!</h1>
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
        <input type="submit" value="Submit" />
      </form>

      <h3>Full Name: {formData.firstName} {formData.lastName}</h3>
    </div>
  );
}

export default App;

