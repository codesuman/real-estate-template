import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestBrochureForm from "./components/forms/RequestBrochureForm";
import RealEstatePage from './layouts/RealEstatePage';
import TermsAndCondition from "./components/sections/terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./components/sections/privacy-policy/PrivacyPolicy";

import './App.css';

const SuccessPage = () => {
  return (
    <section class="thank-sec">
        <div class="container">
            <div class="wrap" style={{padding:'15px',height:'auto !important'}}>
            <span class="msgicon" aria-hidden="true">
              <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              <div>
                <h3 class="oops-greet text-center">Thank you for showing interest.</h3> 
                <h3 class="oops-subtitle text-center">
                     Our representatives will get in touch with you shortly.
                </h3>
                </div>
            </div>
        </div>
        </section>
      )
    }


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RealEstatePage />} />
      <Route path="/request-brochure" element={<RequestBrochureForm />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/> 
    </Routes>
  </Router>
);

export default App;
