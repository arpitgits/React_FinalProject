import React from "react";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import "./aboutPage.css";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";

export default function About() {
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
    "http://localhost:1337/api/about-pages"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  return (
    <div className="AboutBox">
      <div className="aboutContent">
        <div className="aboutTitle">
          <div className="titleLine">
            <ColoredLine color="#008234" />
          </div>
          <h1>About us</h1>
        </div>
        <div className="aboutImgg">
          <img src="https://www.necbdc.org.in/sites/default/files/styles/large/public/cbtc-in-trade-fare.jpg?itok=qMX0o50r"></img>
        </div>
        <div className="aboutTextt">
          <ReactMarkdown>
            {data.data[0].attributes.aboutpagecontent}
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
