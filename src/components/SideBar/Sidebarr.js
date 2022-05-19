import React from "react";
import News from "./News";
import Tender from "./Tender";
import "./newstenders.css";

function Sidebarr() {
  return (
    <div className="newsBox">
      <div className="newstenderBox">
        <>
          <News />
          <Tender />
        </>
      </div>
    </div>
  );
}

export default Sidebarr;
