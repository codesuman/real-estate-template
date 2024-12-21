import React from 'react';
import './AmenitiesSection.css';

const AmenitiesSection = () => {
  return (
    <section class="pt-30 pb-20 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 amenities-section">
      <div class="container">
        <div class="row">
          <div class="col-12 pt-20 pb-20 amenities-section-overlay mt-20 wow fadeIn">
            <div class="row align-self-center">
              <div class="col-lg-12 align-self-center wow slideInUp" data-wow-delay="0.1s">
                <h4 class="mont-reg fs-28 fs-xs-20 fs-sm-20 text-center mb-10 mb-xs-10 mb-sm-10 text-uppercase">
                  <b>AMENITIES</b>
                </h4>
                <p class="mont-reg fs-14 text-center fs-xs-14 fs-sm-14">
                  Discover luxury living with world-class amenities 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-20">
          <div class="col-12 pt-20 pb-20 amenities-section-overlay mt-20 wow fadeIn mb-20">
            <div class="row align-self-center">
              {[
                { name: "Gymnasium", icon: "images/amenities/Icon-01.png" },
                { name: "Retail Store", icon: "images/amenities/Icon-02.png" },
                { name: "Tennis Court", icon: "images/amenities/Icon-03.png" },
                { name: "Kids Play Area", icon: "images/amenities/Icon-04.png" },
                { name: "Mini Theatre", icon: "images/amenities/Icon-05.png" },
                { name: "Jogging Track", icon: "images/amenities/Icon-06.png" }
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
