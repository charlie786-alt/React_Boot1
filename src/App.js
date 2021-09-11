import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import How from './Components/How we work/How';
import AboutUs from './Components/About us/AboutUs';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <How/>
      <AboutUs/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
