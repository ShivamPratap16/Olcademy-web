import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./home/Home";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Banking from "./components/Banking";
import CapitalMarkets from "./components/CapitalMarkets";
import ConsumerGoods from "./components/ConsumerGoods";
import Communication from "./components/Communication";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthProvider";
import Education from "./components/Education";
import Healthcare from "./components/Healthcare";
import HighTech from "./components/HighTech";
import Insurance from "./components/Insurance";
import LifeSciences from "./components/LifeScience";
import Manufacturing from "./components/Manufacturing";
import PublicServices from "./components/PublicServices";
import Retail from "./components/Retail";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import Cloud from "./components/Cloud";
import Cognitive from "./components/Cognitive";
import Consulting from "./components/Consulting";
import CyberSecurity from "./components/CyberSecurity";
import DataAnalytics from "./components/DataAnalytics";
import EnterpriseSolutions from "./components/EnterpriseSolutions";
import Iot from "./components/Iot";
import Network from "./components/Network";
import ManagementConsulting from "./components/ManagementConsulting";
import Staffing from "./components/Staffing";
import OutSourcing from "./components/OutSourcing";
import Corporate from "./components/Corporate";
import Diversity from "./components/Diversity";
import Social from "./components/Social";
import Olcademy from "./components/Olcademy";
import Revolution from "./components/Revolution";
import Small from "./components/Small";
import Future from "./components/Future";
import Smart from "./components/Smart";
import LifeScience from "./components/LifeScience";
import Fundraise from "./components/Fundraise";
import Connect from "./components/Connect";
import Launchpad from "./components/Launchpad";
import Products from "./components/Products";
import MarketSense from "./components/MarketSense";
import Innovate from "./components/Innovate";
import ScaleUp from "./components/ScaleUp";
import Agile from "./components/Agile";
import BrandLift from "./components/BrandLift";
import TalentHub from "./components/TalentHub";
import Dashboard from "./components/Dashboard";
import UsersPage from "./components/UsersPage";



function App() {
  const [authUser] = useAuth(); // Unused setter removed, as it's not utilized in this component
  console.log(authUser); 
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top on route change
    }, [location]);
  // Debugging statement

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Include the Navbar on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/users' element={<UsersPage />} />
        
        {/* <Route path='/changes' element={<OrdersPage />} /> */}
       
        {/* <Route path='/settings' element={<SettingsPage />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/capital-markets" element={<CapitalMarkets />} />
        <Route path="/industries/consumer-goods" element={<ConsumerGoods />} />
        <Route path="/industries/communication" element={<Communication />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/high-tech" element={<HighTech />} />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route path="/industries/life-science" element={<LifeSciences />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/public-services" element={<PublicServices />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/cognitive-business-operations" element={<Cognitive />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/cybersecurity" element={<CyberSecurity />} />
        <Route path="/services/data-and-analytics" element={<DataAnalytics />} />
        <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
        <Route path="/services/iot-and-digital-engineering" element={<Iot />} />
        <Route path="/services/network-solutions" element={<Network />} />
        <Route path="/services/management-consulting" element={<ManagementConsulting />} />
        <Route path="/services/staffing" element={<Staffing />} />
        <Route path="/services/outsourcing-services" element={<OutSourcing />} />
        <Route path="/services/corporate-sustainability" element={<Corporate />} />
        <Route path="/services/diversity-equity-inclusion" element={<Diversity />} />
        <Route path="/services/corporate-social-responsibility" element={<Social />} />
        <Route path="/services/olcademy-way" element={<Olcademy />} />


   
        <Route path="/fy2025-start" element={<Olcademy />} />
                <Route path="/partnership-stakeholders" element={<Social />} />
                <Route path="/genai-hub" element={<ArtificialIntelligence />} />
                <Route path="/ai-power" element={<ArtificialIntelligence />} />
                <Route path="/tech-talks" element={<HighTech />} />
               


                <Route path="/revolutionizing-education" element={<Revolution />} />
                <Route path="/empowering-small-businesses" element={<Small />} />
                <Route path="/future-of-learning" element={<Future />} />
                <Route path="/smart-solutions" element={<Smart />} />

               
{/* 
                <Route path="/revolutionizing-education" element={<RevolutionizingEducation />} />
                <Route path="/empowering-small-businesses" element={<EmpoweringSmallBusinesses />} />
                <Route path="/future-of-learning" element={<FutureOfLearning />} />
                <Route path="/smart-solutions" element={<SmartSolutions />} />
                <Route path="/transforming-data" element={<TransformingData />} /> */}

<Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
                <Route path="/cloud" element={<Cloud />} />
                <Route path="/cognitive-business-operations" element={<Cognitive />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/cybersecurity" element={<CyberSecurity />} />
                <Route path="/data-analytics" element={<DataAnalytics />} />
                <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
                <Route path="/iot-digital-engineering" element={<Iot />} />
                <Route path="/network-solutions" element={<Network />} />
                <Route path="/sustainability-service" element={<Corporate />} />
                <Route path="/management-consulting" element={<ManagementConsulting />} />


                 <Route path="/banking" element={<Banking />} />
                <Route path="/capital-markets" element={<CapitalMarkets />} />
                <Route path="/communications-media" element={<Communication />} />
                <Route path="/consumer-goods" element={<ConsumerGoods />} />
                <Route path="/education" element={<Education />} />
            
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/high-tech" element={<HighTech />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/life-science" element={<LifeScience />} />
                <Route path="/manufacturing" element={<Manufacturing />} />
                <Route path="/public-services" element={<PublicServices />} />
                <Route path="/retail" element={<Retail />} />


                <Route path="/launchpad" element={<Launchpad />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/fundraise" element={<Fundraise />} />

                <Route path="/launchpad" element={<Launchpad />} />
                <Route path="/cloudsync" element={<Cloud />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/fundraise" element={<Fundraise />} />
                <Route path="/marketsense" element={<MarketSense />} />
                <Route path="/innovate" element={<Innovate />} />
                <Route path="/scaleup" element={<ScaleUp />} />
                <Route path="/agile" element={<Agile />} />
                <Route path="/brandlift" element={<BrandLift />} />
                <Route path="/talenthub" element={<TalentHub />} />
                <Route path="/ai" element={<ArtificialIntelligence />} />
                {/* 
               
                
                
                <Route path="/agile" element={<Agile />} />
               
                 */}
                <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>

      {/* Toast notifications */}
      <Toaster />
      
      {/* Footer is included on all pages */}
      <Footer />
     
    </div>
  );
}

export default App;
