import React from "react";
import "./footer.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>North East Cane and Bamboo Development Council ( NECBDC )</h3>
        </div>

        <div class="footer-center">
          <div className="centerr">
            <p>
              <Icon icon="bxs:map" width="30" height="30" color="white" />
              13th Mile, G.S. Road, Burnihat 781023, Assam
            </p>
          </div>

          <div className="centerr">
            <p>
              <Icon
                icon="carbon:phone-voice-filled"
                width="30"
                height="30"
                color="white"
              />{" "}
              +1 555 123456
            </p>
          </div>

          <div className="centerr" >
            <p>
              <Icon icon="fluent:mail-20-filled" width="30" height="30" />
              <a href="mailto:support@company.com">cbtcassam@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">Sponsered By</p>

          <div class="footer-img">
            <a href="#">
              <img src="https://www.necbdc.org.in/sites/default/files/mdoner.jpg"></img>
            </a>
            <a href="#">
              <img src="https://www.necbdc.org.in/sites/default/files/nec_0.jpg"></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
