import React from "react";
import './LocationSection.css'

const LocationSection = ({ onRequestBrochure }) => {
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
                            <img src="images/Location-sora&amp;saki.jpg" class="w-100 h-100" />

                            <a data-fancybox="lifestyle" href="images/Location-sora&amp;saki.jpg" class="w-100 l-box">
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
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link open-sans acc-btn" data-toggle="collapse" data-target="#collapseOne">
                                    Schools<i class="fa fa-minus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="">
                                    <li>
                                        Delhi Public School
                                        <span class="float-right">14 mins</span>
                                    </li>
                                    <li>
                                        Canadian International School<span class="float-right">20 mins</span>
                                    </li>
                                    <li>
                                        Stonehill International School
                                        <span class="float-right">23 mins</span>
                                    </li>
                                    
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed open-sans acc-btn" data-toggle="collapse" data-target="#collapseTwo">
                                    Hospital

                                    <i class="fa fa-plus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="fs-14">
                                    <li>
                                        Manipal Hospital<span class="float-right">29 mins</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed open-sans acc-btn" data-toggle="collapse" data-target="#Leisure">
                                    Restaurants<i class="fa fa-plus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="Leisure" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="fs-14">
                                    <li>
                                        OIA<span class="float-right">15 mins</span>
                                    </li>
                                    <li>
                                        Byg Brewski
                                        <span class="float-right">15 mins</span>
                                    </li>
                                    <li>
                                        Farmlore
                                        <span class="float-right">15 mins</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed open-sans acc-btn" data-toggle="collapse" data-target="#Leisure1">
                                    IT Parks<i class="fa fa-plus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="Leisure1" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="fs-14">
                                    <li>
                                        Devanahalli Business Park<span class="float-right">20 mins</span>
                                    </li>
                                    <li>
                                        Manyata Tech Park<span class="float-right">30 mins</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed open-sans acc-btn" data-toggle="collapse" data-target="#airport">
                                    Airport<i class="fa fa-plus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="airport" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="fs-14">
                                    <li>
                                        International Airport<span class="float-right">15 mins</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed open-sans acc-btn" data-toggle="collapse" data-target="#mall">
                                    Mall<i class="fa fa-plus"></i>
                                    </button>
                                </h2>
                                </div>
                                <div id="mall" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="fs-14">
                                    <li>
                                        Phoenix Mall of Asia<span class="float-right">26 mins</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="text-center mt-20">
                            <a data-toggle="modal" data-target="#myModal" class="scroll mont-reg">
                                <button onClick={onRequestBrochure} class="submit-btn btn btn-primary text-uppercase req-brochure">
                                    <strong>Request Brochure</strong>
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
