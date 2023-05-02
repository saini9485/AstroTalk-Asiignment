import React from "react";

import "../footer/Footer.css";

export function Footer() {
  let time = new Date().toLocaleString();
  return (
    <>
      <div className="Footer">
        <div>
          <h3>Location </h3>
          <span>
            Allegient Unified Technology Pvt. Ltd., 66,2nd Floor, South Patel
            Nagar, New Delhi, Delhi 110008
          </span>
          <h2>{time}</h2>
        </div>
        {/* <div className="footer-icons">
          <div className="icons">
            {" "}
            <a href="#">Github</a>
          </div>
          <div className="icons">
            {" "}
            <a href="#">Instra</a>
          </div>
          <div className="icons">
            {" "}
            <a href="#">Linkedln</a>
          </div>
          <div className="icons">
            <a href="#">Twitter</a>
          </div>
        </div> */}
      </div>
    </>
  );
}
