import React from 'react';

const AmenitiesSection = () => {
  return (
    // <section className="bg-light py-5">
    //   <div className="container">
    //     <h3 className="text-center text-primary mb-5">Amenities</h3>
    //     <div className="row text-center">
    //       {[
    //         { name: "Futsal Court", icon: "img/Icon-01.jpg" },
    //         { name: "Basketball Court", icon: "img/Icon-02.jpg" },
    //         { name: "Tennis Court", icon: "img/Icon-03.jpg" },
    //         { name: "Swimming Pool", icon: "img/Icon-05.jpg" },
    //         { name: "Kids' Play Area", icon: "img/Icon-07.jpg" },
    //         { name: "Party Lawn", icon: "img/Icon-08.jpg" },
    //         { name: "Outdoor Gym", icon: "img/Icon-10.jpg" },
    //         { name: "Amphitheatre", icon: "img/Icon-09.jpg" },
    //       ].map((amenity, index) => (
    //         <div className="col-6 col-md-3 mb-4" key={index}>
    //           <div className="card border-0 shadow h-100">
    //             <img
    //               src={amenity.icon}
    //               alt={amenity.name}
    //               className="card-img-top img-fluid"
    //             />
    //             <div className="card-body">
    //               <p className="card-text fw-bold">{amenity.name}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    // <section className="amenities-section py-5 bg-light text-center">
    //   <div className="container">
    //     <h3 className="mb-4">AMENITIES</h3>
    //     <p className="text-muted mb-5">Explore thoughtfully designed indoor and outdoor amenities</p>
    //     <div className="row">
    //       {/* Example Amenity */}
    //       <div className="col-6 col-md-3 mb-4">
    //         <img 
    //           src="/icons/futsal-court.png" 
    //           alt="Futsal Court" 
    //           className="img-fluid mb-2"
    //         />
    //         <h6>Futsal Court</h6>
    //       </div>
    //       <div className="col-6 col-md-3 mb-4">
    //         <img 
    //           src="/icons/swimming-pool.png" 
    //           alt="Swimming Pool" 
    //           className="img-fluid mb-2"
    //         />
    //         <h6>Swimming Pool</h6>
    //       </div>
    //       <div className="col-6 col-md-3 mb-4">
    //         <img 
    //           src="/icons/gym.png" 
    //           alt="Gym" 
    //           className="img-fluid mb-2"
    //         />
    //         <h6>Gym</h6>
    //       </div>
    //       <div className="col-6 col-md-3 mb-4">
    //         <img 
    //           src="/icons/badminton.png" 
    //           alt="Badminton Court" 
    //           className="img-fluid mb-2"
    //         />
    //         <h6>Badminton Court</h6>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section class="section-three-bg">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-20 pb-20 section-three-overlay mt-20 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">
          <div class="row align-self-center">
            <div class="col-lg-12 align-self-center wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
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
        <div class="col-12 pt-20 pb-20 section-three-overlay mt-20 wow fadeIn mb-20" style="visibility: visible; animation-name: fadeIn;">
          <div class="row align-self-center">
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-01.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Futsal Court</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-02.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Basketball Court</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-03.jpg" alt="">

              <h6 class="text-center mt-2 fs-14">Tennis Court</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-04.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Box Cricket</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-05.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Swimming Pool&ensp;</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-06.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Kids' Swimming Pool</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-07.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Kids' Play Area</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-08.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Party Lawn</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-09.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Amphitheatre</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-10.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Outdoor Gym</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-11.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Pool Table</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-12.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Party Terrace</h6>
            </div>

            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-13.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Squash Court</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-14.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Badminton Court</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-15.jpg" alt="">

              <h6 class="text-center mt-2 fs-14">Outdoor Yoga Deck</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-16.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Gym</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-17.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Table Tennis</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-18.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Pets’ Park</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-19.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Board Games</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-20.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Cards Room</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-21.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Billiards</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-22.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Crèche</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Salon &amp; spa.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">Salon &amp; Spa</h6>
            </div>
            <div class="col-lg-2 col-md-2 col-6 align-self-center wow slideInUp pt-20" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: slideInUp;">
              <img class="center" width="60px" src="img/Icon-24.jpg" alt="">
              <h6 class="text-center mt-2 fs-14">
                Yoga/Aerobics/ <br>
                Multipurpose Hall
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AmenitiesSection;
