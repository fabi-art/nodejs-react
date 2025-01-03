import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <div className="container">
        <h1 className="text-center my-4">Contactez nous !!</h1>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="product-card text-center">
              <img src="/images/OIP.jpeg" alt="contact 1" className="img-fluid" />
              <h3 className="product-title mt-3">Contactez nous !!</h3>
              <p className="product-description">N'hésitez pas à nous contacter via WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send?phone=00221784718835"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
          {/* Ajoutez plus de colonnes ici pour plus de produits */}
        </div>
      </div>
    </div>
  );
}

export default About;
