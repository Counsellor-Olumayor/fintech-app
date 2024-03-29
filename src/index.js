import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import App from './App';
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";
import VerifyOtp from "./pages/signup/VerifyOtp";
import Login from "./pages/login";
// import Home from './pages/home'
// import Activity from './pages/activity'
// import Bills from './pages/bills'
// import Transactions from './pages/transactions'
// import Complaints from './pages/complaints'
// import Settings from './pages/settings'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendMoney from "./pages/transaction/SendMoney";
import Topup from "./pages/transaction/Topup";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home/>,
  // },
  // {
  //   path: "/activity",
  //   element: <Activity/>,
  // },
  // {
  //   path: "/bill",
  //   element: <Bills/>,
  // },
  // {
  //   path: "/transactions",
  //   element: <Transactions/>,
  // },
  // {
  //   path: "/complaints",
  //   element: <Complaints/>,
  // },
  // {
  //   path: "/settings",
  //   element: <Settings/>,
  // },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/send-money",
    element: <SendMoney />,
  },
  {
    path: "/fund-wallet",
    element: <Topup />,
  },
  {
    path: "/auth/sign-up",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/auth/verify-otp",
    element: <VerifyOtp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Signup/> */}
  </React.StrictMode>
);

reportWebVitals();
