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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/intro",
    element: <Intro />
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
