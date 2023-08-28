import './App.css';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Intro from './components/Intro';
import Variables from './components/Variables';
import BasicDataTypes from './components/BasicDataTypes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/intro",
    element: <Intro />
  },
  {
    path: "/basic-data-types",
    element: <BasicDataTypes />
  },
  {
    path: "/variables",
    element: <Variables />
  }
]);

export default function App() {
  return (
    <div id="app-root">
      <Banner />
      <NavBar />
      <Outlet />
      <RouterProvider router={router} />
    </div>
  )
}
