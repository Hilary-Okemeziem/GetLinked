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

  function reveal() {
    let reveals = document.querySelectorAll('.reveal')


    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150
        
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}
useEffect(() => {
  window.addEventListener('scroll', reveal);
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
