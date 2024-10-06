import React from 'react';
import { CheckCircle } from 'lucide-react';

const Result: React.FC = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="text-green-500 w-16 h-16" />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Test Submitted</h2>
      <p className="text-gray-600">
        Thank you for completing the test. Your results will be processed shortly.
      </p>
    </div>
  );
};

export default Result;