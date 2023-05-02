import React from "react";

import "../card/Card.css";

export function CardPage() {
  return (
    <>
      <div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="">
              <img
                className="card-img"
                src="https://astrotalk.com/assets/images/banner/sehwag.webp"
                class="img-fluid "
                alt="..."
              />
            </div>
            <div class=" card-content">
              <div class="card-body">
                <h3 class="card-titl"> Astrotalk Sehwag</h3>
                <h6>Location</h6>
                <div> <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p></div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
