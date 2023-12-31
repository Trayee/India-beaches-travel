import React, { useState } from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import {BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
// import { SearchResultsList } from "./components/SearchResultsList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search  />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
  }

export default App;
