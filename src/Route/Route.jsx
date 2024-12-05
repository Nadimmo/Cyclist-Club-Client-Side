<<<<<<< HEAD
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import About from '../Components/About/About';
import Gallery from '../Components/Gallery/Gallery';
import Dashboard from '../Components/Dashboard/Dashboard';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import EventPage from '../Components/Dashboard/EventPage/EventPage';
import OurTeam from '../Components/Dashboard/OurTeam/OurTeam';
import AllUsers from '../Components/Dashboard/AllUsers/AllUsers';
import ArticlePage from '../Components/Dashboard/ArticlePage/ArticlePage';
import BlogPage from '../Components/Dashboard/BlogPage/BlogePage';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/gallery',
            element: <Gallery></Gallery>
        },
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        }
    ]
  },
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
        {
            path:"event",
            element: <EventPage></EventPage>
        },
        {
            path:'team',
            element: <OurTeam></OurTeam>
        },
        {
            path:'article',
            element: <ArticlePage></ArticlePage>
        },
        {
            path:'blog',
            element: <BlogPage></BlogPage>
        },
        {
            path:"users",
            element: <AllUsers></AllUsers>
        }
    ]
  }
]);

=======
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import About from '../Components/About/About';
import Gallery from '../Components/Gallery/Gallery';
import Dashboard from '../Components/Dashboard/Dashboard';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import EventPage from '../Components/Dashboard/EventPage/EventPage';
import OurTeam from '../Components/Dashboard/OurTeam/OurTeam';
import AllUsers from '../Components/Dashboard/AllUsers/AllUsers';
import ArticlePage from '../Components/Dashboard/ArticlePage/ArticlePage';
import BlogPage from '../Components/Dashboard/BlogPage/BlogePage';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/gallery',
            element: <Gallery></Gallery>
        },
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/login',
            element: <Login></Login>
        }
    ]
  },
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
        {
            path:"event",
            element: <EventPage></EventPage>
        },
        {
            path:'team',
            element: <OurTeam></OurTeam>
        },
        {
            path:'article',
            element: <ArticlePage></ArticlePage>
        },
        {
            path:'blog',
            element: <BlogPage></BlogPage>
        },
        {
            path:"users",
            element: <AllUsers></AllUsers>
        }
    ]
  }
]);

>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
export default Router