import React from 'react';

const HeroBanner = () => {
  return (
    <>
      <div className="banner">
        <img
          src="./images/hero-banner.webp"
          className="bannerImage"
          alt="collab logo"
        />
        <div className="featuredIn">
          <p className="featureIn_text">FEATURED IN</p>
          <div className="featuredIn_image">
            <div className="featuredIn_pictures">
              <img
                src="./images/vogue-logo.png"
                width={'130px'}
                height={'30px'}
                alt="collab logo"
              />
            </div>
            <div>
              <img
                src="./images/vogue-logo.png"
                width={'130px'}
                height={'30px'}
                alt="collab logo"
              />
            </div>
            <div>
              <img
                src="./images/vogue-logo.png"
                width={'130px'}
                height={'30px'}
                alt="collab logo"
              />
            </div>
            <div>
              <img
                src="./images/vogue-logo.png"
                width={'130px'}
                height={'30px'}
                alt="collab logo"
              />
            </div>
            <div>
              <img
                src="./images/vogue-logo.png"
                width={'130px'}
                height={'30px'}
                alt="collab logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
