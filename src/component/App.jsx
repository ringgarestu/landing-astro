import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../component/LandingPage.jsx";
import FAQ from "../component/FAQ.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/landingpage/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
