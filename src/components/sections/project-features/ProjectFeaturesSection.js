import React from 'react';
import './ProjectFeaturesSection.css'

const ProjectFeaturesSection = ({ onRequestBrochure }) => {
  return (
    <section class="pt-30 pb-20 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 overflow-hidden features-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row mt-30">
              <div class="col-lg-7 align-self-center wow flipInX" style={{visibility: 'visible', animationName: 'flipInX'}}>
                <img src="images/Image1.jpg" alt="" class="w-100 mb-40" />
              </div>
              <div class="col-lg-5 fadeIn wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                <h4 class="mont-reg mt-10 fs-28 fs-xs-20 fs-sm-20 mb-30 mb-xs-10 mb-sm-10 text-uppercase">
                  <b>Project Features</b>
                </h4>
                <ul class="list-unstyled custom-bullet Museo-normal fs-16 fs-xs-14 fs-sm-14">
                  <li class="color-white">Large Living Balconies</li>
                  <li class="color-white">126 Acres Integrated Township</li>
                  <li class="color-white">Just 10 mins aways from major prime locations</li>
                  <li class="color-white">25+ Indoor &amp; Outdoor Amenities</li>
                  <li class="color-white">2.5 Acres of Amenities and a Clubhouse </li>
                  <li class="color-white">
                    50,000 SQFT Integrated Retail Space
                  </li>
                </ul>
                {/* <div class="mt-20 mb-40">
                  <a data-toggle="modal" data-target="#myModal" class="scroll mont-reg"> */}
                    <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                      Request Brochure
                    </button>
                  {/* </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeaturesSection;
