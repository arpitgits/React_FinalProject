import "./newstenders.css";
import Tenderr from "./TendersInfo";
import useFetch from "../../hooks/useFetch";

export default function Tender() {
  const api_url = "http://localhost:1337";
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/tenders?populate=*"
  );
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error : </p>;
  return (
    <div className="Tenders">
      <div className="tendersTitle">
        <h2>Tenders</h2>
      </div>
      <div className="tendersDisc">
        <ul>
          {data.data.map((e) => (
            <li>
              <a href="">
                <p style={{ padding: "2px", margin: "1px" }}>
                  {e.attributes.title}
                </p>
              </a>
              <p style={{ fontSize: "12px", margin: "3px", padding: "5px" }}>
                {e.attributes.issuedon}
              </p>
            </li>
          ))}
        </ul>
        <button>Read More</button>
      </div>
    </div>
  );
}
