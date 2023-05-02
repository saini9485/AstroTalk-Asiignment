import React from "react";

import "../banner/Banner.css";

export function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="img">
          <img src="https://astrotalk.com/assets/images/banner/sehwag.webp" alt="banner" className="img" />
        </div>

        <div className="content">
          <h2>Virendra Sehwag <span   >Recomded</span> Astrotalk</h2>
          <h2>Chat with Astrologer</h2>
          <button className="btn">Chat us</button>
        </div>
      </div>
    </>
  );
}
