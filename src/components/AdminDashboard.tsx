import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Users, FileText } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

const AdminDashboard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user || !user.isAdmin) {
    navigate('/admin');
    return null;
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      // Here you would typically process the Excel file and update your questions
      console.log('File uploaded:', files[0].name);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Admin Dashboard</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center">
            <Upload className="text-indigo-500 w-6 h-6 mr-2" />
            <span>Upload Questions</span>
          </div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer"
          >
            Choose File
          </label>
        </div>
        
        <button className="w-full flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
          <Users className="w-5 h-5 mr-2" />
          View User Results
        </button>
        
        <button className="w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
          <FileText className="w-5 h-5 mr-2" />
          Generate User IDs
        </button>
      </div>
      
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;