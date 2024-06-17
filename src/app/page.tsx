// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// const Home = () => {
//   const router = useRouter();

//   const handleUserClick = () => {
//     router.push("/login");
//   };

//   const handleAdminClick = () => {
//     router.push("/adminlogin");
//   };

//   return (
//     <main className="bg-gray-200">
//       <div className="grid grid-cols-2 w-full">
//         <div
//           className="bg-gradient-to-r from-blue-500 to-#16155c-800 flex items-center justify-center cursor-pointer"
//           onClick={handleUserClick}
//           style={{ width: "50vw", height: "100vh" }}
//         >
//           <h1 style={{fontSize:"2rem", color:"#29039c", fontWeight:"bold"}}>User</h1>
//         </div>
//         <div
//           className="bg-gradient-to-r from-orange-500 to-#16155c-800 flex items-center justify-center cursor-pointer"
//           onClick={handleAdminClick}
//           style={{ width: "50vw", height: "100vh" }}
//         >
//           <h1 style={{fontSize:"2rem", color:"#29039c", fontWeight:"bold"}}>Admin</h1>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;










'use client'
import React from 'react';
import { Button, Container, Typography, Grid, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

import CarouselOneImg from '../assets/Carousel-1.png';
import CarouselTwoImg from '../assets/Carousel-2.png';
import CarouselThreeImg from '../assets/Carousel-3.png';
import CompanyOneImg from '../assets/company-1.png';
import CompanyTwoImg from '../assets/company-2.png';
import CompanyThreeImg from '../assets/company-3.png';
import CompanyFourImg from '../assets/company-4.png';
import CompanyFiveImg from '../assets/company-5.png';
import CompanySixImg from '../assets/company-6.png';

const Home = ({ user }: { user: any }) => {
    const router = useRouter(); // Use useRouter hook for navigation

    const handleCTAClick = () => {
        if (user) {
            router.push('/products');
        } else {
            router.push('/login');
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box p={4}>
                        <Typography variant="h1" gutterBottom>
                            SHOP WITH UTMOST
                        </Typography>
                        <Typography variant="h1" style={{ color: '#216ad9', fontWeight: 'bold' }}>
                            <i>STYLE</i>
                        </Typography>
                        <Typography variant="h4" style={{ marginBottom: 20 }}>
                            Shop With latest Product which are trending
                        </Typography>
                        <Box marginBottom={2}>
                            <Button variant="contained" color="primary" style={{ width: 250 }} onClick={handleCTAClick}>
                                Browse Products
                            </Button>
                            <Box marginTop={2}>
                                <Typography variant="h6">Products available from :</Typography>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <img src={CompanyOneImg} style={{ height: 50 }} alt="Company 1" />
                                    </Grid>
                                    <Grid item>
                                        <img src={CompanyTwoImg} style={{ height: 50 }} alt="Company 2" />
                                    </Grid>
                                    <Grid item>
                                        <img src={CompanyThreeImg} style={{ height: 50 }} alt="Company 3" />
                                    </Grid>
                                    <Grid item>
                                        <img src={CompanyFourImg} style={{ height: 50 }} alt="Company 4" />
                                    </Grid>
                                    <Grid item>
                                        <img src={CompanyFiveImg} style={{ height: 50 }} alt="Company 5" />
                                    </Grid>
                                    <Grid item>
                                        <img src={CompanySixImg} style={{ height: 50 }} alt="Company 6" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Carousel Item 1 */}
                    <Box display="flex" justifyContent="center">
                        <img src={CarouselOneImg} style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }} alt="Carousel 1" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Carousel Item 2 */}
                    <Box display="flex" justifyContent="center">
                        <img src={CarouselTwoImg} style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }} alt="Carousel 2" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Carousel Item 3 */}
                    <Box display="flex" justifyContent="center">
                        <img src={CarouselThreeImg} style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }} alt="Carousel 3" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
