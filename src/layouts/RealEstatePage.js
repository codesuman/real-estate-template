import React from "react";

import HeroSlider from "../components/sections/hero/HeroSlider";
import ProjectFeaturesSection from "../components/sections/project-features/ProjectFeaturesSection";
import ConfigurationSection from "../components/sections/configuration/ConfigurationSection";
import AmenitiesSection from "../components/sections/amenities/AmenitiesSection";
import FooterSection from "../components/sections/footer/FooterSection";

import "bootstrap/dist/css/bootstrap.min.css";

const RealEstatePage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroSlider />

      {/* Project Features Section */}
      <ProjectFeaturesSection />

      {/* Configuration Section */}
      <ConfigurationSection />
      
      {/* Amenities Section */}
      <AmenitiesSection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default RealEstatePage;
