import React from "react";
import "./history.css";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";
import { Icon } from '@iconify/react';

export default function History() {
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
    "http://localhost:1337/api/history-pages?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;


  console.log(data.data[0].attributes.pdffile.data.attributes.url)
  return (
    <>
      <div className="HistoryBox">
        <div className="HistoryContent">
          <div className="historyTitle">
            <div className="titleLine">
              <ColoredLine color="#008234" />
            </div>
            <h1>History</h1>
          </div>
          <div className="historyText">
            <ReactMarkdown>
              {data.data[0].attributes.historycontent}
            </ReactMarkdown>
          </div>
          <div className="pdfLink">
          <Icon icon="ant-design:file-pdf-outlined" color="red" /><a href={api_url + data.data[0].attributes.pdffile.data.attributes.url}>{data.data[0].attributes.pdffile.data.attributes.name}</a>
          </div>
        </div>
        <div className="sideBar">
          <News />
          <Tender />
        </div>
      </div>
    </>
  );
}
