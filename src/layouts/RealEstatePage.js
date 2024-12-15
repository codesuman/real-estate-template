import React, { useState } from "react";

import HeroSlider from "../components/sections/hero/HeroSlider";
import ProjectFeaturesSection from "../components/sections/project-features/ProjectFeaturesSection";
import ConfigurationSection from "../components/sections/configuration/ConfigurationSection";
import AmenitiesSection from "../components/sections/amenities/AmenitiesSection";
import FooterSection from "../components/sections/footer/FooterSection";

import RequestBrochureForm from "../components/forms/RequestBrochureForm";

import "bootstrap/dist/css/bootstrap.min.css";

const RealEstatePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroSlider />

      {/* Project Features Section */}
      <ProjectFeaturesSection onRequestBrochure={handleOpenModal}/>

      {/* Configuration Section */}
      <ConfigurationSection />
      
      {/* Amenities Section */}
      <AmenitiesSection />
      
      {/* Footer Section */}
      <FooterSection />

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal show">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Nikoo Homes</h5>
                  <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                </div>
                <div className="modal-body">
                  <h5 class="text-center fs-12">
                    Request More Details Now
                  </h5>
                  <RequestBrochureForm onClose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstatePage;
