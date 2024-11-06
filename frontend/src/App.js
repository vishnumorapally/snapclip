// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Retrieve from './components/Retrieve';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsandConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SharePage from './components/SharePage';
import Linkget from './components/Linkget';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
              </>
            }
          />
          <Route path="/share" element={<SharePage />} />
          <Route path="/retrieve" element={<Retrieve />} />
          <Route path='/get/:id' element = {<Linkget/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          
          {/* Other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
