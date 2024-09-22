import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './App.css'; 

function App() {
  return (
    <div className="App" id="home"> 
      <Navbar />
      <Hero />
      <section id="about" className="info-section">
        <h2><span style={{ textDecoration: 'underline' }}>Services</span></h2>
        <ul>
          <li>Tire Change</li>
          <li>Jump Start</li>
          <li>Fuel Delivery</li>
          <li>Roadside Tire Repair</li>
        </ul>
      </section>
      <section id="contact" className="info-section">
        <h2><span style={{ textDecoration: 'underline' }}>Contact Us</span></h2>
        <p>If you are <strong>NOT</strong> in a safe location, please contact <strong>9-1-1</strong> ASAP</p>
        <p>Cellphone: 562-200-1633</p>
        <p>Email: Roadrunner24.7tires@gmail.com</p>
        <p>---Hablamos Español---</p>
      </section>

    </div>
  );
}

export default App;