import React from 'react';
import './AmenitiesSection.css';

const AmenitiesSection = () => {
  return (
    <section class="amenities-section">
      <div class="container">
        <div class="row">
          <div class="col-12 pt-3 pb-3 lg:pt-3 lg:pb-3 md:pt-3 md:pb-3 sm:pt-3 sm:pb-3 amenities-section-overlay mt-20 wow fadeIn">
            <div class="row align-self-center">
              <div class="col-lg-12 align-self-center wow slideInUp" data-wow-delay="0.1s">
                <h4 class="mont-reg fs-28 fs-xs-20 fs-sm-20 text-center mb-4 mb-xs-10 mb-sm-10 text-uppercase">
                  <b>AMENITIES</b>
                </h4>
                <p class="mont-reg fs-14 text-center fs-xs-14 fs-sm-14">
                  Discover luxury living with world-class amenities 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-12 pt-20 pb-20 amenities-section-overlay mt-20 wow fadeIn mb-20">
            <div class="row align-self-center">
              {[
                { name: "Futsal Court", icon: "images/amenities/Icon-01.jpg" },
                { name: "Basketball Court", icon: "images/amenities/Icon-02.jpg" },
                { name: "Tennis Court", icon: "images/amenities/Icon-03.jpg" },
                { name: "Box Cricket", icon: "images/amenities/Icon-04.jpg" },
                { name: "Futsal Court", icon: "images/amenities/Icon-01.jpg" },
                { name: "Basketball Court", icon: "images/amenities/Icon-02.jpg" },
                { name: "Tennis Court", icon: "images/amenities/Icon-03.jpg" },
                { name: "Box Cricket", icon: "images/amenities/Icon-04.jpg" },
                { name: "Futsal Court", icon: "images/amenities/Icon-01.jpg" },
                { name: "Basketball Court", icon: "images/amenities/Icon-02.jpg" },
                { name: "Tennis Court", icon: "images/amenities/Icon-03.jpg" },
                { name: "Box Cricket", icon: "images/amenities/Icon-04.jpg" }
              ].map((amenity) => (
                <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" >
                  <img class="center" width="60px" src={amenity.icon} alt={amenity.name}/>
                  <h6 class="text-center mt-2 fs-14">{amenity.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
