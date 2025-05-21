import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // send to backend or redirect to onboarding
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-red-500">
          Sign Up
        </h2>

        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-700 rounded-xl placeholder-gray-400 focus:outline-none"
        />
        {errors.username && <p className="text-red-400 text-sm">{errors.username}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-700 rounded-xl placeholder-gray-400 focus:outline-none"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

        {/* Password */}
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-700 rounded-xl placeholder-gray-400 focus:outline-none"
        />
        {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}

        {/* Confirm Password */}
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mb-3 p-3 bg-gray-700 rounded-xl placeholder-gray-400 focus:outline-none"
        />
        {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}

        {/* Toggle Password Visibility */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            Show Passwords
          </label>
        </div>

        {/* Optional Fields */}
        <div className="mb-3">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 rounded-xl text-gray-300"
          >
            <option value="">Select Gender (optional)</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-gray-700 rounded-xl text-gray-300"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition duration-300 p-3 rounded-xl font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
