import React from "react";
import "./header.css";
import ImageCouarsel from "./ImageCouarsel";
import NavBar from "./NavBar";
import { Icon } from '@iconify/react'
export default function Header() {
  return (
    <>
      <NavBar />
      <ImageCouarsel />
      <div className="iconBar">
        <a href="#" className="facebook">
          <Icon icon="akar-icons:facebook-fill" />
        </a>
        <a href="#" className="twitter">
          <Icon icon="akar-icons:twitter-fill" />
        </a>
        <a href="#" className="google">
          <Icon icon="akar-icons:google-contained-fill" />
        </a>
        <a href="#" class="instagram">
          <Icon icon="akar-icons:instagram-fill" />
        </a>
      </div>
    </>
  );
}
