import React from 'react';
import { Link } from 'react-router-dom';

const shopBanner = () => {
  return (
    <>
      <div className="shopBanner">
        <div className="shopBannerImage">

          
          <div className="container">
            <div className="row ">
              <div className="col-lg-12">
                <div className="shop_text">
                  <h2>
                    <span>What Makes Forte Series Different?</span>
                  </h2>
                  <p>
                    <span>
                      Our products are formulated based on the survey feedback
                      of over
                      <br />
                      15,000 guys in our Level Up Men's Community. Carefully
                      crafted,
                      <br />
                      tested and perfected for your styling needs.
                    </span>
                  </p>
                  <Link to="/allProducts">
                    <button className="shopButton">Shop Here</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shopBanner;
