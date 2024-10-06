import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Award } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Question Bank Simulator</h1>
      <div className="flex justify-center mb-8">
        <Brain className="text-indigo-500 w-16 h-16" />
      </div>
      <p className="text-lg mb-8 text-gray-600">
        Test your knowledge with our interactive question bank!
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
          <BookOpen className="text-blue-500 w-8 h-8 mb-2" />
          <p className="text-sm">Multiple Topics</p>
        </div>
        <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
          <Award className="text-green-500 w-8 h-8 mb-2" />
          <p className="text-sm">Instant Results</p>
        </div>
      </div>
      <Link
        to="/login"
        className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Start Test
      </Link>
      <div className="mt-4">
        <Link to="/admin" className="text-indigo-500 hover:underline">
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;