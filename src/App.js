import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div id="app-root">
      <Navbar />
      <nav>
        <ul>
          <li>
            <a href={`/hello`}>Hello</a>
          </li>
          <li>
            <a href={`/goodbye`}>goodbye</a>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
