import React from 'react';

const Gallery = () => {
    return (
        <section class="pt-50 pb-30 pt-xs-20 pb-xs-20 pt-sm-20 pb-sm-20 overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h4 class="mont-reg fs-28 fs-xs-20 fs-sm-20 text-center mb-10 mb-xs-10 mb-sm-10 mb-30 text-uppercase">
            <b>Gallery</b>
          </h4>
          <div class="row align-self-center galerystyle">
            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image2.jpg" alt=""><img src="images/Image2.jpg" class="w-100" alt=""/></a>
            </div>
            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image3.jpg" alt=""><img src="images/Image3.jpg" class="w-100" alt=""/></a>
            </div>
            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image4.jpg" alt=""><img src="images/Image4.jpg" class="w-100" alt=""/></a>
            </div>

            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image5.jpg" alt=""><img src="images/Image5.jpg" class="w-100" alt=""/></a>
            </div>
            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image6.jpg" alt=""><img src="images/Image6.jpg" class="w-100" alt=""/></a>
            </div>
            <div class="col-lg-4 col-md-4 col-12 gallery-images-construction mb-10">
              <a href="images/Image8.jpg" alt=""><img src="images/Image8.jpg" class="w-100" alt=""/></a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Gallery;
