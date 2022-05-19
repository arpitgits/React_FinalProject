import React from "react";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import "./news.css";
import Tender from "../../components/SideBar/Tender";
import News from "../../components/SideBar/News";
import { Link } from "react-router-dom";

export default function NewsPage() {
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
    "http://localhost:1337/api/news?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;
  return (
    <div className="newsPageBox">
      <div className="boxbox">
        <div className="aboutTitle">
          <div className="titleLine">
            <ColoredLine color="#008234" />
          </div>
          <h1>News</h1>
        </div>

        <div className="newContentBox">
        {data.data.map((e) => (
          <div className="newscard" key={e.attributes.id}>
            <a href="">
              <h1 className="newstitle">
                {e.attributes.newstitle}
              </h1>
            </a>
            <p className="newscontent">
              {e.attributes.newscontent.substring(0,200)}....
            </p>
            <Link to={`/news/${e.id}`} ><button>Read More</button></Link>
          </div>
        ))}
        </div>
      </div>
      <div className="sideBar">
        <News />
        <Tender />
      </div>
    </div>
  );
}
