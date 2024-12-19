import React from 'react';
import './ConfigurationSection.css'

// https://codepen.io/sdhnik/pen/JdVaow
const ConfigurationSection = ({ onRequestBrochure }) => {
  return (
    <section class="pt-10 pb-20 pt-xs-10 pb-xs-20 pt-sm-10 pb-sm-20 overflow-hidden config-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
          <div class="quiz-window">
              <div class="quiz-window-body">
                <div class="gui-window-awards">
                  <ul class="guiz-awards-row guiz-awards-header">
                    <li class="guiz-awards-header-title">Type & Dimension's</li>
                    <li class="guiz-awards-header-track">Price</li>
                    <li class="guiz-awards-header-time">More Details</li>
                  </ul>
                  <ul class="guiz-awards-row guiz-awards-row-even">
                    
                    <li class="guiz-awards-title">2 BHK
                    <div class="guiz-awards-subtitle">1,144 Sq.ft</div>
                    </li>
                    <li class="guiz-awards-track">1.28 Cr*</li>
                    <li class="guiz-awards-time">
                    <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                      Enquire
                    </button>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row">
                    <li class="guiz-awards-title">3 BHK
                    <div class="guiz-awards-subtitle">1,336 Sq.ft - 1,735 Sq.ft</div>
                    </li>
                    <li class="guiz-awards-track"><span class="null">1.5 Cr* - 2.06 Cr*</span></li>
                    <li class="guiz-awards-time">
                      <span class="null">
                      <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                       Enquire
                      </button>
                      </span>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row guiz-awards-row-even">
                    <li class="guiz-awards-title">3.5BHK
                    <div class="guiz-awards-subtitle">1,872 Sq.ft</div></li>
                    <li class="guiz-awards-track"><span class="null">2.14 Cr*</span></li>
                    <li class="guiz-awards-time">
                      <span class="null">
                      <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                       Enquire
                      </button>
                      </span>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row">
                    <li class="guiz-awards-title">4 BHK + Staff
                      <div class="guiz-awards-subtitle">2,553 Sq.ft</div></li>
                    <li class="guiz-awards-track"><span class="null">2.88 Cr*</span></li>
                    <li class="guiz-awards-time"><span class="null">
                      <button onClick={onRequestBrochure} class="submit-btn btn req-brochure">
                       Enquire
                      </button></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigurationSection;
 
