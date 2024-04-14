import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Banner from './components/Banner/Banner.jsx';
import Residential from './components/Residential/Residential.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Footer from './components/Footer/Footer.jsx';
import ResidentialDetails from './components/ResidentialDetails/ResidentialDetails.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import { register } from 'swiper/element/bundle';
import Articles from './components/Articles/Articles.jsx';
import MapView from './components/MapView/MapView.jsx';

register();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      },
      {
        path: '/residential',
        element: <Residential></Residential>
      },
      {
        path: '/residential/:id',
        element: <PrivateRoute><ResidentialDetails></ResidentialDetails></PrivateRoute> ,
        loader: () => fetch('../residentials.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/userProfile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/articles',
        element: <PrivateRoute><Articles></Articles></PrivateRoute>
      },
      {
        path: '/mapview',
        element: <MapView></MapView>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
