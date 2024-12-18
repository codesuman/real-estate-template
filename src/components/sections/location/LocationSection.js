import React from "react";
import './LocationSection.css'

class LocationCategory {
    constructor(name, locations) {
        this.name = name;
        this.locations = locations;
    }
}

class Location {
    constructor(name, distance) {
        this.name = name;
        this.distance = distance;
    }
}

const LocationSection = ({ onRequestBrochure }) => {
    const locationCategories = [
        new LocationCategory("Schools & Universities", 
            [
                new Location("Canadian International School", "11 mins"),
                new Location("Presidency College", "22 mins"),
                new Location("Delhi Public School", "17 mins"),
                new Location("VIBGYOR High School", "16 mins"),
                new Location("National Public School", "5 mins"),
            ]
        ),
        new LocationCategory("Hospital", 
            [
                new Location("Motherhood Hospital", "17 mins"),
                new Location("Cytecare Cancer Hospitals", "8 mins"),
                new Location("Aster CMI Hospital", "23 mins"),
                new Location("Prolife Multi Speciality Hospital", "20 mins"),
            ]
        ),
        new LocationCategory("Shopping", 
            [
                new Location("The Galleria Mall", "12 mins"),
                new Location("Bhartiya Mall of Bengaluru", "15 mins"),
                new Location("Dmart Yelahanka", "15 mins"),
                new Location("Phoenix Mall Of Asia", "15 mins"),
                new Location("Decathlon", "17 mins"),
            ]
        ),
        new LocationCategory("IT Parks", 
            [
                new Location("L&T Tech Park", "14 mins"),
                new Location("Kirloskar Business Parkt", "17 mins"),
                new Location("Embassy Manyata Business Park", "20 mins"),
                new Location("BCIT, Bhartiya City", "15 mins"),
            ]
        ),
        new LocationCategory("Hotels", 
            [
                new Location("Queen’s La-Casa", "9 mins"),
                new Location("Hilton, Embassy Manyata Business Park", "24 mins"),
                new Location("The Leela Hotel, Bhartiya City", "14 mins"),
                new Location("Courtyard by Marriott", "23 mins"),
            ]
        ),
    ];

  return (
    <section class="pt-50 pb-0 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4 class="mont-reg fs-28 fs-xs-20 fs-sm-20 text-center mb-10 mb-xs-10 mb-sm-10 text-uppercase">
                        <b>LOCATION</b>
                    </h4>
                    <div class="row mt-30">
                        <div class="col-lg-7 align-self-center wow flipInX location-map">
                        <div class="amenities-gallery mg-mb">
                            <img src="images/Nikoomaps.png" class="w-100 h-100" />

                            <a data-fancybox="lifestyle" href="images/Nikoomaps.png" class="w-100 l-box">
                            <div class="ami-overlay"></div>
                            </a>
                        </div>
                        <p class="fs-9">
                            ETA as per Google Maps. May vary depending on time of day and
                            mode of transport.
                        </p>
                        </div>
                        <div class="col-lg-5 fadeIn wow fadeInDown location-nearby">
                            <div class="bs-example mb-xs-20 mb-sm-20">
                                <div class="accordion" id="accordionExample">
                                    {
                                        locationCategories.map((locationCategory, index) => (
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button 
                                                        class="accordion-button" style={{ backgroundColor: 'white', color: 'black' }}
                                                        type="button" 
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target={`#collapse${locationCategory.name}`}
                                                        aria-expanded={index === 0} // Set true for the first item
                                                        aria-controls={`collapse${locationCategory.name}`}>
                                                        {locationCategory.name}
                                                    </button>
                                                </h2>
                                                <div id={`collapse${locationCategory.name}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <ul>
                                                            {
                                                                locationCategory.locations.map((location) => (
                                                                    <li>
                                                                        {location.name}
                                                                        <span class="float-right">{location.distance}</span>
                                                                    </li>
                                                                ))
                                                            }
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div class="text-center mt-20">
                                <a data-toggle="modal" data-target="#myModal" class="scroll mont-reg">
                                    <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                                        Request Brochure
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LocationSection;
