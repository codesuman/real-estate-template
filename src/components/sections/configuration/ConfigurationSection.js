import React from 'react';
import './ConfigurationSection.css'

// https://codepen.io/sdhnik/pen/JdVaow
const ConfigurationSection = () => {
  return (
    <section class="pt-10 pb-20 pt-xs-10 pb-xs-20 pt-sm-10 pb-sm-20 overflow-hidden config-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
          <div class="quiz-window">
              <div class="quiz-window-body">
                <div class="gui-window-awards">
                  <ul class="guiz-awards-row guiz-awards-header">
                    <li class="guiz-awards-header-star">&nbsp;</li>
                    <li class="guiz-awards-header-title">TYPE</li>
                    <li class="guiz-awards-header-track">AREA</li>
                    <li class="guiz-awards-header-time">&nbsp;</li>
                  </ul>
                  <ul class="guiz-awards-row guiz-awards-row-even">
                    <li class="guiz-awards-star"><span class="star goldstar"></span></li>
                    <li class="guiz-awards-title">EUPHORIA
                      <div class="guiz-awards-subtitle">About EUPHORIA</div>
                    </li>
                    <li class="guiz-awards-track">2,400 SQ. FT.</li>
                    <li class="guiz-awards-time">
                      <a href="javascript:void (0);" class="price-click">
                        Know More
                      </a>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row">
                    <li class="guiz-awards-star"><span class="star silverstar"></span></li>
                    <li class="guiz-awards-title">THRILL
                      <div class="guiz-awards-subtitle">About THRILL</div>
                    </li>
                    <li class="guiz-awards-track"><span class="null">1,500 SQ. FT.</span></li>
                    <li class="guiz-awards-time">
                      <span class="null">
                        <a href="javascript:void (0);" class="price-click">
                          Know More
                        </a>
                      </span>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row guiz-awards-row-even">
                    <li class="guiz-awards-star"><span class="star bronzestar"></span></li>
                    <li class="guiz-awards-title">ADRENALINE
                      <div class="guiz-awards-subtitle">About ADRENALINE</div></li>
                    <li class="guiz-awards-track">Other Sizes</li>
                    <li class="guiz-awards-time">
                      <span class="null">
                        <a href="javascript:void (0);" class="price-click">
                          Know More
                        </a>
                      </span>
                    </li>
                  </ul>
                  <ul class="guiz-awards-row">
                    <li class="guiz-awards-star"><span class="star rhodiumstar"></span></li>
                    <li class="guiz-awards-title">TRANQUIL
                      <div class="guiz-awards-subtitle">About TRANQUIL</div></li>
                    <li class="guiz-awards-track"><span class="null">-</span></li>
                    <li class="guiz-awards-time"><span class="null">Sold Out</span></li>
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
