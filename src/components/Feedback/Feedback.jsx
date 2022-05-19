import "./feedback.css";
// import required modules
import { Pagination } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Feedback() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: 40,
      }}
    />
  );
  return (
    <div className="feedbackBox">
      <div className="title">
        <div className="titleLine">
          <ColoredLine color="#008234" />
        </div>
        <div className="titleName">
          <h2>Feedback</h2>
        </div>
      </div>
      <div className="feedbacks">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="boxIn">
              <div className="heading">
                <div className="img"></div>
                <div className="title">Lorem Ipsum</div>
              </div>
              <div className="content">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor nec facilisi orci, semper. Vestibulum tempor risus,
                  morbi ultrices rhoncus ut. Sit massa ut quam aliquam felis et
                  mattis rutrum. Sit tincidunt iaculis fermentum at est in.”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="boxIn">
              <div className="heading">
                <div className="img"></div>
                <div className="title">Lorem Ipsum</div>
              </div>
              <div className="content">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor nec facilisi orci, semper. Vestibulum tempor risus,
                  morbi ultrices rhoncus ut. Sit massa ut quam aliquam felis et
                  mattis rutrum. Sit tincidunt iaculis fermentum at est in.”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="viewMore">
        <button>View More</button></div>
    </div>
  );
}
