import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate the admin credentials against your backend
    // For demonstration, we'll use a hardcoded check
    if (username === 'admin' && password === 'password') {
      setUser({ id: 'admin', isAdmin: true });
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Admin Login</h2>
      <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <div className="bg-indigo-500 p-3">
          <Lock className="text-white w-6 h-6" />
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <div className="bg-indigo-500 p-3">
          <Lock className="text-white w-6 h-6" />
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Login
      </button>
    </form>
  );
};

export default AdminLogin;