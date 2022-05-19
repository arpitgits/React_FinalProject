import React from "react";
import "./homeproject.css";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import News from "../../components/SideBar/News";
import { Icon } from "@iconify/react";
import Tender from "../../components/SideBar/Tender";
import {Link} from 'react-router-dom';

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

  const api_url = "http://localhost:1337";
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/projects?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  console.log(
    data.data[0].attributes.projectImg.data[0].attributes.formats.thumbnail.url
  );
  return (
    <div className="ProjectBox">
      <div className="projectContent">
        <div className="projectTitle">
          <div className="titleLine">
            <ColoredLine color="#008234" />
          </div>
          <h1>Projects</h1>
        </div>
        <div className="ankk">
          <div className="container">
            {data.data.map((e) => (
              <div  key={e.attributes.id} className="item">
                <img
                  src={
                    api_url +
                    e.attributes.projectImg.data[0].attributes.formats.thumbnail
                      .url
                  }
                ></img>
                <div className="projectheading">
                  <div className="date">
                    <Icon icon="ic:baseline-date-range" />
                    <p>{e.attributes.date}</p>
                  </div>
                  <Link to={`/details/${e.id}`}><h4>{e.attributes.projectTitle}</h4></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sideBar">
        <News />
        <Tender />
      </div>
    </div>
  );
}
