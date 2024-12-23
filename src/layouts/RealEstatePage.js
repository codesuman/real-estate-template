import React, { useState } from "react";

import HeroSlider from "../components/sections/hero/HeroSlider";
import ProjectFeaturesSection from "../components/sections/project-features/ProjectFeaturesSection";
import ConfigurationSection from "../components/sections/configuration/ConfigurationSection";
import AmenitiesSection from "../components/sections/amenities/AmenitiesSection";
import LocationSection from "../components/sections/location/LocationSection";
import Disclaimer from "../components/sections/disclaimer/Disclaimer";
import Gallery from "../components/sections/gallery/Gallery";
import MasterPlanSection from "../components/sections/master-floor-plans/MasterPlan";

import FooterSection from "../components/sections/footer/FooterSection";

import RequestBrochureForm from "../components/forms/RequestBrochureForm";

import useMediaQuery from "../util/UseMediaQuery";



const RealEstatePage = () => {
  const slidesForDesktop = [
    { path: "/images/Banner_D_01.jpg", name: "Offer Slide 1" },
    { path: "/images/Banner_D_02.jpg", name: "Offer Slide 2" }
  ];

  const slidesForMobile = [
    { path: "/images/Banner_M_01.jpg", name: "Offer Slide 1" },
    { path: "/images/Banner_M_02.jpg", name: "Offer Slide 2" }
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    
    <div className="font-sans">

      {/* Hero Section */}
      {/* Conditionally Render HeroSlider */}
      {isMobile ? (
        <HeroSlider slides={slidesForMobile} />
      ) : (
        <HeroSlider slides={slidesForDesktop} />
      )}


      {/* Project Features Section */}
      <ProjectFeaturesSection onRequestBrochure={handleOpenModal}/>

      {/* Configuration Section */}
      <ConfigurationSection onRequestBrochure={handleOpenModal}/>
      
      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Location Section */}
      <LocationSection onRequestBrochure={handleOpenModal}/>

      {/* MasterPlan Section */}
      <MasterPlanSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Disclaimer Section */}
      <Disclaimer />

      {/* Footer Section */}
      <FooterSection />

      {/* Sticky Button for Mobile View */}
      {isMobile && (
        <button
          className="text-uppercase sticky-bottom-btn btn"
          onClick={handleOpenModal}
        >
          Enquire Now
        </button>
      )}

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
