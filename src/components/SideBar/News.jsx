import "./newstenders.css";
import New from "./NewsInfo";
import {Link} from 'react-router-dom'

export default function News() {
  
  return (
    <div className="News">
      <div className="newsTitle">
        <h2>News</h2>
      </div>
      <div className="newsDisc">
        <ul>
          {New.map((e) => {
            return (
              <li>
                <a href="">
                  <p>{e.title}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <Link to="/project">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}
