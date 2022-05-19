import React from "react";
import Topbar from "../topbar/Topbar";
import Header from "../Header/Header";
import Sidebarr from "../SideBar/Sidebarr";
import Project from "../Projects/Project";
import WhatDo from "../whatDo/WhatDo";
import About from "../about/About";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import ImageCouarsel from "../Header/ImageCouarsel";

function Home() {
  return (
    <>
      <ImageCouarsel />
      <Sidebarr />
      <Project />
      <WhatDo />
      <About />
      <Feedback />
      
    </>
  );
}
export default Home;
