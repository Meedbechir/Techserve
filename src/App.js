import React from 'react';
import './App.css';
import Header from './components/Header';
import FirstPart from './components/FirstPart';
import Services from './components/Services';
import SecondPart from './components/SecondPart';
import ThirdPart from './components/ThirdPart';
import FourthPart from './components/FourthPart';
import LastPart from './components/LastPart';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import image1 from './assets/images/image1.png';

function App() {
  
  const backgroundImageStyle = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    backgroundAttachment: 'fixed',
  };

  return (
    <>
    <div className="App" style={backgroundImageStyle}>
      <Header />
      <FirstPart />
      </div>
      <div>
      <Services /> 
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <LastPart />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </>
    
  );
}

export default App;
