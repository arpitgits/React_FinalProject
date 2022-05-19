import "./WhatDo.css";

export default function WhatDo() {
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
  return (
    <>
      <div className="weDo">
        <div className="title">
          <div className="titleLine">
            <ColoredLine color="#008234" />
          </div>
          <div className="titleName">
            <h2>What We Do</h2>
          </div>
        </div>
        <div className="grid-container">
          <article className="card">
            <img src="https://www.necbdc.org.in/sites/default/files/imageblock/consultancy.jpg"></img>
            <article className="content">
              <h2>Consultancy</h2>
              <p>CBTC provides consultancy to entrepreneurs and organizations</p>
            </article>
          </article>
          <article className="card">
            <img src="https://www.necbdc.org.in/sites/default/files/imageblock/promotion.jpg"></img>
            <article className="content">
              <h2>Promotions</h2>
              <p>CBTC provides marketing support to bamboo Artisans and entrepreneurs.</p>
            </article>
          </article>
          <article className="card">
            <img src="https://www.necbdc.org.in/sites/default/files/imageblock/training.jpg"></img>
            <article className="content">
              <h2>Training</h2>
              <p>CBTC has been providing training to artisans and entrepreneurs</p>
            </article>
          </article>
          <article className="card">
            <img src="https://www.necbdc.org.in/sites/default/files/imageblock/networking.jpg"></img>
            <article className="content">
              <h2>Networking</h2>
              <p>CBTC partners with several national & international organizations.</p>
            </article>
          </article>
        </div>
      </div>
    </>
  );
}
