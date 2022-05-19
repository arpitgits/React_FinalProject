import React from "react";
import "./about.css";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from 'react-markdown'

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
    "http://localhost:1337/api/home-abouts"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  console.log(data.data[0].attributes.homeaboutcontent);

  return (
    <>
      <div className="aboutBox">
        <div className="aboutImg">
          <img src="https://www.necbdc.org.in/sites/default/files/styles/large/public/cbtc-in-trade-fare.jpg?itok=qMX0o50r00"></img>
        </div>
        <div className="aboutText">
          <div className="title">
            <div className="titleLine">
              <ColoredLine color="#008234" />
            </div>
            <h1>About us</h1>
          </div>
          <div className="aboutCon">     
            <ReactMarkdown>{data.data[0].attributes.homeaboutcontent}</ReactMarkdown>
            <div className="btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
