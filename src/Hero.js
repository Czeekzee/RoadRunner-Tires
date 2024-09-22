import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="column-left">
          <h1>We're here to help!</h1>
          <p>Available 24/7. No hidden fees. Friendly service.</p>
          <p>Hablamos Español</p>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact us now
          </button>
        </div>
        <div className="column-right">
          <img
            src={`${process.env.PUBLIC_URL}/roadrunner logo2.png`}
            alt="illustration"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
