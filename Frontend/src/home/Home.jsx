import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Spotlight from "../components/Spotlight";

import Discover from "../components/Discover";
import Products from "../components/Products";



function Home() {
  return (
      <div>
<Navbar />
<HeroSection />
<div className='absolute top-[1165px]'>
  <Discover />
  <Services />
  <Products />
  <Spotlight />
  <Footer />
 
</div>
</div>
  );
}

export default Home;
