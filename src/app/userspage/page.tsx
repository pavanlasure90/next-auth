"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

const UsersPage = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/userspage/user-details/home');
  };

  const handleContact = () => {
    router.push('/contact');
  };

  const handleLeave = () => {
    router.push('/leave');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-grow w-full">
        {/* Sidebar */}
        <div className="bg-gray-200 w-auto p-4 h-full flex flex-col">
          {/* Sidebar content */}
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleHome}>
            <HomeIcon className="h-6 w-6 text-gray-800 mr-2" />
            <span>Home</span>
          </div>
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleContact}>
            <MailIcon className="h-6 w-6 text-gray-800 mr-2" />
            <span>Contact</span>
          </div>
          <div className="flex items-center cursor-pointer" onClick={handleLeave}>
            <ExitToAppIcon className="h-6 w-6 text-gray-800 mr-2" />
            <span>Leave</span>
          </div>
        </div>

        {/* UsersPage content */}
        <div className="flex-grow p-4">
          UsersPage
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        {/* Footer content */}
        Footer
      </div>
    </div>
  );
};

export default UsersPage;
