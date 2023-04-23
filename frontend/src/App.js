import './App.css';

import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom"; 
import React, { lazy , Suspense, useState} from "react";
import { Container } from '@mui/material';
import UserProvider from './Context/UserProvider';
const Dash = lazy(()=>import("./Components/AdminDashboard/Dash"))
const Login = lazy(()=>import("./Components/Login/Login"))
const Header = lazy(()=>import("./Components/Header/Header"))
const Auth = lazy(()=>import("./Components/Auth/Auth"))
const Game = lazy(()=>import("./Components/Game/Game"))



function App() {
  return (
    <>
      <div className="App">
        <UserProvider>
          <Header/>
          <Container>
            <Outlet/>
          </Container>
        </UserProvider>
      </div>
  </>
  );
}
const  appRouter= createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App/>,
    children:[
      {
        path: "/",
        exact: true,
        element:
        <Suspense>
          <Auth/>
        </Suspense>
      },
      {
        path: "/dash",
        exact: true,
        element:
        <Suspense>
          <Dash/>
        </Suspense>
      },
      {
        path: "/game",
        exact: true,
        element:
        <Suspense>
          <Game/>
        </Suspense>
      }
    ]
  },
])
export  {appRouter};
export default App;