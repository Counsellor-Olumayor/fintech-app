const loginValidate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }else if (values.email.indexOf('@') === -1) {
        errors.email = 'Must be a valid email';
      }
    
  
    return errors;
  };

  export {
    loginValidate
  }