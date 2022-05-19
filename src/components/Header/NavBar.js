import React from "react";
import "./imagecouarsel.css";
import { Icon } from "@iconify/react";
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="menu-bar">
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">
            About CBTC <Icon icon="gridicons:dropdown" />
          </Link>
          <div className="drop-down">
            <ul>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/partner">CBTC Partners</Link>
              </li>
              <li>
                <Link to="/governingbody">Governing Body</Link>
              </li>
              <li>
                <Link to="/staff">CBTC Staff</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/consultancy">Consultancy</Link>
              </li>
              <li>
                <Link to="/information">Right to Information</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/tenders">Tenders</Link>
        </li>
        <li>
          <Link to="/resources">Resources </Link>
        </li>

        <button>Contact us</button>
      </ul>
    </div>
  );
}
