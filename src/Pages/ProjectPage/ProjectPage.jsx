import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import ReactMarkdown from "react-markdown";

export default function ProjectPage() {
  const { id } = useParams();
  const api_url = "http://localhost:1337";
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/projects/" + id + "?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  console.log(
    data.data.attributes.projectContent
  );

  return (
    <div>
      <div className="ProjectBox">
        <div className="projectContent">
          <div className="projectTitle">
            <h1>{data.data.attributes.projectTitle}</h1>
          </div>
          <div className="aboutImgg">
            <img
              src={
                api_url +
                data.data.attributes.projectImg.data[0].attributes.formats
                  .thumbnail.url
              }
            ></img>
          </div>
          <div className="aboutTextt">
            <ReactMarkdown>
              {data.data.attributes.projectContent}
            </ReactMarkdown>
          </div>
        </div>
        <div className="sideBar">
          <News />
          <Tender />
        </div>
      </div>
    </div>
  );
}
