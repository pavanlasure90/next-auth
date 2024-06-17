"use client"
import Navbar from '@/components/Navbar';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

const ContactPage = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/userspage/user-details/home');
  };

  const handleContact = () => {
    router.push('/userspage/user-details/contact');
  };

  const handleLeave = () => {
    router.push('/userspage/user-details/leave');
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="sticky top-0 bg-gray-200 w-20 p-4 h-screen flex flex-col">
          {/* Sidebar content */}
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleHome}>
            <HomeIcon className="h-6 w-6 text-gray-800 mr-2" />
          </div>
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleContact}>
            <MailIcon className="h-6 w-6 text-gray-800 mr-2" />
          </div>
          <div className="flex items-center cursor-pointer" onClick={handleLeave}>
            <ExitToAppIcon className="h-6 w-6 text-gray-800 mr-2" />
          </div>
        </div>

        {/* ContactPage content */}
        <div className="flex-grow p-4">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400 h-32 resize-none" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        Footer
      </div>
    </div>
  );
};

export default ContactPage;
