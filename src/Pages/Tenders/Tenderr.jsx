import React from "react";
import "./tender.css";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import useFetch from "../../hooks/useFetch";

export default function Tenderr() {
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
    "http://localhost:1337/api/tenders?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;
  console.log(data.data[0].attributes.file.data[0].attributes.url)
  return (
    <>
      <div className="GoverningBox">
        <div className="GoverningContent">
          <div className="GoverningTitle">
            <div className="titleLine">
              <ColoredLine color="#008234" />
            </div>
            <h1>Tenders</h1>
          </div>
          <div className="GoverningText">
            <table class="content-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Issued On</th>
                  <th>Last Date</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
              {data.data.map((e) => (
                <tr>
                  <td>{e.attributes.title}</td>
                  <td>{e.attributes.issuedon}</td>
                  <td>{e.attributes.lastdate}</td>
                  <a href={api_url + e.attributes.file.data[0].attributes.url}><td>Click here to Download</td></a>
                </tr>
              ))}
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="sideBar">
          <News />
        </div>
      </div>
    </>
  );
}
