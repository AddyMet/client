import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Welcome to the register page. <Link to="/">Go to login</Link>.</p>
    </div>
  );
};

export default RegisterPage;