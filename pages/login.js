import React from 'react';
import Login from '@/component/auth/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/component/client/Navbar/Navbar'


function index() {
    return (

        <div>
            <Navbar/>
            <ToastContainer/>
         
            <Login/>
       
        </div>
    )
}

export default index;
