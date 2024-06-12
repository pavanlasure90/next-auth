"use client"
import React from 'react'
import Navbar from '@/components/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminsPage = () => {

  const router = useRouter()

  const handleHome = () => {
    router.push('/userspage/user-details/home');
  };

  const handleContact = () => {
    router.push('/userspage/user-details/contact');
  };

  const handleLeave = () => {
    router.push('/userspage/user-details/leave');
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

        {/* dashboardPage content */}
        <div className="flex-grow p-4 text-center justify-center">
          <Link href= '/dashboard'>
              <button>Dashboard</button>
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        Footer
      </div>
    </div>
  );
};

export default AdminsPage



