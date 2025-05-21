import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);

  const validateForm = (email, password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordValid = password.length >= 6;
    return emailRegex.test(email) && passwordValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
    setIsValid(validateForm(updatedForm.email, updatedForm.password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login submitted');
    // Add actual login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-[#0a0a0a] p-8 rounded-xl shadow-2xl w-11/12 max-w-sm text-white border border-[#6e0000]">
        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-white">Power Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#3a0000] text-white p-3 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#6e0000] font-semibold"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password (min 6 chars)"
            value={formData.password}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#3a0000] text-white p-3 mb-6 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#6e0000] font-semibold"
            required
            minLength={6}
          />
          <button
            type="submit"
            disabled={!isValid}
            className={`$
              {isValid ? 'bg-[#6e0000] hover:bg-[#990000]' : 'bg-[#6e0000] cursor-not-allowed'}
              text-white font-bold py-3 rounded w-full transition duration-200 tracking-wide`}
          >
            Login 
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Forgot Password?{' '}
          <span className="text-[#990000] cursor-pointer hover:underline">Reset</span>
        </p>

        <p className="text-sm text-center mt-2 text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#990000] hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;