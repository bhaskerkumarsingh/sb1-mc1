import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim()) {
      // Here you would typically validate the user ID against your backend
      // For now, we'll just set the user and navigate to the test
      setUser({ id: userId, isAdmin: false });
      navigate('/test');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Enter User ID</h2>
      <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <div className="bg-indigo-500 p-3">
          <User className="text-white w-6 h-6" />
        </div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your unique ID"
          className="flex-grow px-4 py-2 bg-transparent focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Start Test
      </button>
    </form>
  );
};

export default Login;