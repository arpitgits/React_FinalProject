import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import ReactMarkdown from "react-markdown";

export default function Newsss() {
  const { id } = useParams();
  const api_url = "http://localhost:1337";
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/news/" + id + "?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;
  console.log(
    data.data.attributes.newsImage.data.attributes.formats.thumbnail.url
  );
  return (
    <div className="newsPageBox">
      <div className="boxbox">
        <div className="aboutTitle">
          <h1>{data.data.attributes.newstitle}</h1>
        </div>
        <div className="newContentBox">
          <div className="aboutImgg">
            <img
              src={
                api_url +
                data.data.attributes.newsImage.data.attributes.formats.thumbnail
                  .url
              }
            ></img>
          </div>
          <ReactMarkdown>{data.data.attributes.newscontent}</ReactMarkdown>
        </div>
      </div>

    </div>
  );
}
