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
import Residentials from './components/Residentials/Residentials.jsx';
import AddCountry from './components/AddCountry/AddCountry.jsx';
import Countries from './components/Countries/Countries.jsx';
import CountrySpots from './components/CountrySpots/CountrySpots.jsx';

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
        element: <Residential></Residential>,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/spot')
      },
      // {
      //   path: '/residentials',
      //   element: <Residentials></Residentials> ,
      //   loader: () => fetch('https://tourist-spot-server-8z3k5bjru-rakesh-biswas-projects.vercel.app/spot')
      // },
      {
        path: '/residential/:id',
        element: <PrivateRoute><ResidentialDetails></ResidentialDetails></PrivateRoute> ,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/spot')
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
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/spot')
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddSpot></AddSpot> </PrivateRoute>
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`https://tourist-spot-server-rho.vercel.app/spot/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList> </PrivateRoute>,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/spot')
        // loader: ({params}) => fetch(`https://tourist-spot-server-8z3k5bjru-rakesh-biswas-projects.vercel.app/spot/${params.email}`)
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
        loader: ({params}) => fetch(`https://tourist-spot-server-rho.vercel.app/spot/${params.id}`)
      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/country')
      },
      {
        path: '/addCountry',
        element: <AddCountry></AddCountry>
      },
      {
        path: '/countrySpots/:id',
        element: <CountrySpots></CountrySpots>,
        loader: ({params}) => fetch(`https://tourist-spot-server-rho.vercel.app/country/${params.id}`)
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
