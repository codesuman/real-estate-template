import React, { useState } from 'react';
import './MasterPlan.css';

const MasterPlanSection = () => {

    // State to track the active section
    const [activeSection, setActiveSection] = useState("master");

    return (
        <section class="global-secq pt-50 pb-50 pt-xs-20 pt-sm-20 pb-sm-20 mt-30 mb-20 master-plan-section" id="master">
    <div class="container">
      <h4 class="color-gold wow fadeInDown mont-reg fs-xs-20 fs-sm-20 pt-sm-20 pb-sm-20 text-center text-uppercase ani-fade-in">
        <b>Master Plan and Floor Plan</b>
      </h4>
      <br/>
      <div class="buttons text-center pb-4">
        <button id="phase1" class={`btn btn-light px-4 py-2 mx-2 ${activeSection === "master" ? "btn-is-active" : ""}`}
            onClick={() => setActiveSection("master")}>
          <h6 class="color-gold wow fadeInDown mont-reg text-center m-auto ani-fade-in">
            <strong> Master Plan </strong>
          </h6>
        </button>
        <button id="phase2" class={`btn btn-light px-4 py-2 mx-2 ${activeSection === "floor" ? "btn-is-active" : ""}`}
            onClick={() => setActiveSection("floor")}>
          <h6 class="color-gold wow fadeInDown mont-reg text-center m-auto ani-fade-in">
            <strong> Floor Plan </strong>
          </h6>
        </button>
      </div>
      <div id="floors">
      {activeSection === "master" && (
        <div class="row disp-none" id="p1">
          <div class="col-lg-2 col-md-6 col-12"></div>
          <div class="col-lg-8 col-md-8 col-12">
            <div class="amenities-gallery mg-mb">
              <img src="images/amenities/masterplan.jpg" class="w-100" />

              <a data-fancybox="lifestyle" href="images/amenities/masterplan.jpg" class="l-box lifestyle-img-w22">
                <div class="ami-overlay"></div>
              </a>
            </div>

            <h6 class="color-gold fadeInDown mont-reg text-center fs-16 mt-10">
              <span class="fwb">Master Plan</span>
            </h6>
          </div>
          <div class="col-lg-2 col-md-6 col-12"></div>
        </div>
         )}

      {activeSection === "floor" && (
        <div class="row fadeInDown disp-flex" id="p2">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="amenities-gallery mg-mb">
              <img src="images/amenities/3 BHk (Type 1) (3)-01.jpg" class="w-100" />

              <a data-fancybox="lifestyle" href="images/amenities/3 BHk (Type 1) (3)-01.jpg" class="l-box lifestyle-img-w21">
                <div class="ami-overlay"></div>
              </a>
            </div>
            <h6 class="color-gold fadeInDown mont-reg text-center fs-16 mt-10">
              <span class="fwb">3 BHK Type-1</span>
            </h6>
          </div>

          <div class="col-lg-4 col-md-6 col-12">
            <div class="amenities-gallery mg-mb">
              <img src="images/amenities/3 BHk (Type 2) (3)-01.jpg" class="w-100" />

              <a data-fancybox="lifestyle" href="images/amenities/3 BHk (Type 2) (3)-01.jpg" class="l-box lifestyle-img-w21">
                <div class="ami-overlay"></div>
              </a>
            </div>
            <h6 class="color-gold fadeInDown mont-reg text-center fs-16 mt-10">
              <span class="fwb">3 BHK Type-2</span>
            </h6>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="amenities-gallery mg-mb">
              <img src="images/amenities/4 BHk (1)-01 (3).jpg" class="w-100" />

              <a data-fancybox="lifestyle" href="images/amenities/4 BHk (1)-01 (3).jpg" class="l-box lifestyle-img-w21">
                <div class="ami-overlay"></div>
              </a>
            </div>
            <h6 class="color-gold fadeInDown mont-reg text-center fs-16 mt-10">
              <span class="fwb">4 BHK </span>
            </h6>
          </div>
        </div>
      )}
      </div>
    </div>
  </section>
    )
}

export default MasterPlanSection;