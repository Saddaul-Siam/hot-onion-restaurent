import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <div className="row bg-dark pb-5">
      <h1>This is footer</h1>
      <div className="col-md 6">
        <img className="w-50" src={logo} alt="" />
      </div>
      <div className="col-md 6">
        <Link to="/" className="text-decoration-none text-white">About Online food</Link><br />
        <Link to="/" className="text-decoration-none text-white">Read our blog</Link><br />
        <Link to="/" className="text-decoration-none text-white">Sign up to delivery</Link><br />
        <Link to="/" className="text-decoration-none text-white">Add your restaurant</Link><br />
      </div>
      <div className="col-md 6">
        <Link to="/" className="text-decoration-none text-white">Get help</Link><br />
        <Link to="/" className="text-decoration-none text-white">Read FAQs</Link><br />
        <Link to="/" className="text-decoration-none text-white">View all cities</Link><br />
        <Link to="/" className="text-decoration-none text-white">Add your restaurant</Link><br />
      </div>
    </div>
  );
};

export default Footer;