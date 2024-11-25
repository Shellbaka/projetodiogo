import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/navbar/Navbar'; 
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navb/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;