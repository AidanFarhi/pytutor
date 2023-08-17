import './App.css';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Hello from './components/Hello';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "hello",
    //     element: <Hello />,
    //   },
    // ],
  },
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
