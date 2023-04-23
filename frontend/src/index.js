import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react'
import {
     createBrowserRouter,
     RouterProvider,Outlet
   } from "react-router-dom";
import App, { appRouter } from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  
     <RouterProvider router={appRouter} />
     
  
);