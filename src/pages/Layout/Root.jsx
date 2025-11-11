import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../components/Footer/Footer';

const Root = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000, // animation duration in ms
       easing: "ease-in-out", // animation easing
       once: false, // <--- set false to animate every time
       mirror: true, // whether animation should happen only once
     });
   }, []);
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
     
        />
      </div>
    );
};

export default Root;