import React from 'react';
import { footer } from '../../data/Data';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, inbox every month</p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2022</span>
      </div>
    </>
  );
};

export default Footer;
