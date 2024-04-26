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
import AllSpot from './components/AllSpot/AllSpot.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';
import MyList from './components/MyList/MyList.jsx';
import UpdateSpot from './components/UpdateSpot/UpdateSpot.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';

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
      },
      {
        path: '/allSpot',
        element: <AllSpot></AllSpot>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddSpot></AddSpot> </PrivateRoute>
      },
      {
        path: '/updateSpot',
        element: <UpdateSpot></UpdateSpot>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList> </PrivateRoute>
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
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
