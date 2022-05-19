import "./topbar.css";
import { Icon } from '@iconify/react';

export default function Topbar() {
  return (
    <div  className="topbar">
      <div className="title">
        <h1>North East Cane and Bamboo Development Council</h1>
      </div>
      <div className="searchbox">
        <input placeholder="" />
        <Icon className="searchIcon" icon="bi:search" color="#008234" />
      </div>
    </div>
  );
}
