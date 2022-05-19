import React from "react";
import "./governingBody.css";
import News from "../../components/SideBar/News";
import Tender from "../../components/SideBar/Tender";
import useFetch from "../../hooks/useFetch";
import ReactMarkdown from "react-markdown";

export default function GoverningBody() {
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
    "http://localhost:1337/api/governing-bodies"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;

  return (
    <>
      <div className="GoverningBox">
        <div className="GoverningContent">
          <div className="GoverningTitle">
            <div className="titleLine">
              <ColoredLine color="#008234" />
            </div>
            <h1>Governing Body</h1>
          </div>
          <div className="GoverningText">
            <table className="content-table">
              <tbody>
              {data.data.map((e) => (
                <tr>
                  <td>{e.attributes.department}</td>
                  <td>{e.attributes.rank}</td>
                </tr>
              ))}                
              </tbody>
            </table>
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
