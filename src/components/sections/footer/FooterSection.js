import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <footer className="bg-white text-black py-4">                  
        <div className="container text-center">
        
          <p><span class="null">
               <Link to="/terms-and-conditions">T&C</Link>
              </span>&nbsp;&nbsp;
              <span class="null">
                <Link to="/privacy-policy">Privacy</Link>
              </span>&nbsp;&nbsp;&copy;2024 Nikoo Homes Property Group. All rights reserved.</p>
        </div>
      </footer>
    )
}

export default FooterSection;