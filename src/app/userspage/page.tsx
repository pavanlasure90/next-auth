'use client'
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: Rating;
}

const UsersPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: number) => {
    try {
      const userId = 'YOUR_USER_ID'; // Replace with the actual user ID from your authentication logic
      const response = await axios.post('/api/add-to-cart', { userId, productId });
      console.log(response.data);
      // You can add additional logic here to update the UI or provide feedback to the user
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleHome = () => {
    router.push("/userspage/user-details/home");
  };

  const handleContact = () => {
    router.push("/userspage/user-details/contact");
  };

  const handleLeave = () => {
    router.push("/userspage/user-details/leave");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="sticky top-0 bg-gray-200 w-64 p-4 h-screen flex flex-col">
          {/* Sidebar content */}
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleHome}>
            <HomeIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Home</span> */}
          </div>
          <div className="flex items-center mb-4 cursor-pointer" onClick={handleContact}>
            <MailIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Contact</span> */}
          </div>
          <div className="flex items-center cursor-pointer" onClick={handleLeave}>
            <ExitToAppIcon className="h-6 w-6 text-gray-800 mr-2" />
            {/* <span>Leave</span> */}
          </div>
        </div>

        {/* UsersPage content */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <div className="relative pb-56 mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute top-0 left-0 h-full w-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-green-600 font-bold">${product.price}</p>
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <p className="text-gray-600 text-sm">({product.rating.count} reviews)</p>
                <Button variant="outlined" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 h-16 flex items-center justify-center w-full">
        Footer
      </div>
    </div>
  );
};

export default UsersPage;
