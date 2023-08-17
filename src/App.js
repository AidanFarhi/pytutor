import './App.css';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div id="app-root">
      <Banner />
      <NavBar />
      <Outlet />
    </div>
  )
}
