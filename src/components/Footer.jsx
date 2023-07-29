import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='footer-social'></div>
          <h3>Follow Us</h3>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href='https://www.facebook.com/login/' target='_blank'><FaFacebook className='icon' /></a>
            <a href='https://twitter.com/i/flow/login' target='_blank'><FaTwitter className='icon' /></a>
            <a href='https://www.youtube.com/account/login' target="_blank"><FaYoutube className='icon' /></a>
            <a href='https://in.pinterest.com/login/' target='_blank'><FaPinterest className='icon' /></a>
            <a href='https://www.instagram.com/accounts/login/' target ="_blank"><FaInstagram className='icon' /></a>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
