import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestBrochureForm from "./components/forms/RequestBrochureForm";
import RealEstatePage from './layouts/RealEstatePage';

import './App.css';

const SuccessPage = () => <h1>Form Submitted Successfully!</h1>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RealEstatePage />} />
      <Route path="/request-brochure" element={<RequestBrochureForm />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>
);

export default App;
