"use client";
import React, { useState, useEffect } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { useRouter } from "next/navigation";
import axios from "axios";

const AdminsPage = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log("calling");
    
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/api/users/getAllUsers`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEdit = (userId: string) => {
    console.log("Edit user:", userId);
  };

  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <AdminNavbar />

      {/* Main content */}
      <div className="flex flex-grow w-full">
        {/* AdminsPage content */}
        <div className="flex-grow p-4">
          <h1 className="text-2xl text-center justify-center font-bold">
            Users
          </h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user._id}>
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => handleEdit(user._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        Footer
      </div>
    </div>
  );
};

export default AdminsPage;
