import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
