import React from "react";

import "./project.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Projects from "./ProjectInfo";
import {Link} from 'react-router-dom'

export default function Project() {
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
    <>
      <div className="projectbackground">
        <div className="projectgroup">
          <div className="title">
            <div className="titleLine">
              <ColoredLine color="#008234" />
            </div>
            <div className="titleName">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="projectCouarsel">
            <Splide
              options={{
                gap: "2rem",
                type: "loop",
                perPage: 3,
              }}
            >
              {Projects.map((e) => {
                return (
                  <SplideSlide>
                    <img src={e.src} />
                    <div className="projectdisc">
                      <h3>{e.title}</h3>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
          <div className="projectView">
            <Link to="/project">
              <button>View All</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
