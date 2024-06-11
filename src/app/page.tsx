"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push("/login");
  };

  const handleAdminClick = () => {
    router.push("/adminspage");
  };

  return (
    <main className="bg-gray-200">
      <div className="grid grid-cols-2 w-full">
        <div
          className="bg-gradient-to-r from-blue-500 to-#16155c-800 flex items-center justify-center cursor-pointer"
          onClick={handleUserClick}
          style={{ width: "50vw", height: "100vh" }}
        >
          <h1 style={{fontSize:"2rem", color:"#29039c", fontWeight:"bold"}}>User</h1>
        </div>
        <div
          className="bg-gradient-to-r from-orange-500 to-#16155c-800 flex items-center justify-center cursor-pointer"
          onClick={handleAdminClick}
          style={{ width: "50vw", height: "100vh" }}
        >
          <h1 style={{fontSize:"2rem", color:"#29039c", fontWeight:"bold"}}>Admin</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;











// aqua ,  #16155c