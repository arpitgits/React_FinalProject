import React from "react";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import "./partner.css";

import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";

export default function Partner() {
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

  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/partner-pages"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  return (
    <div className="PartnerBox">
      <div className="PartnerContent">
        <div className="partnerTitle">
          <div className="titleLine">
            <ColoredLine color="#008234" />
          </div>
          <h1>CBTC Partners</h1>
        </div>
        <div className="partnerText">
          <ReactMarkdown>
            {data.data[0].attributes.partnercontent}
          </ReactMarkdown>
        </div>
      </div>
      <div className="sideBar">
        <News />
        <Tender />
      </div>
    </div>
  );
}
