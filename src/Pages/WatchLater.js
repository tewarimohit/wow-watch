import React from 'react'
import Header from '../Components/Header';
import Sidebar from "../Components/Sidebar";
import WatchLaterCard from '../Components/WatchLaterCard';
import "../Styles/Home.css";

const WatchLater = () => {
  return (
    <div className="page-container">
    <header className="page-header">
        <Header />
    </header>
    <div className="side-bar">
        <Sidebar />
    </div>
    <div className="info">
        <h1 className="std-font-two hd-m-font">Watch Later</h1>
    </div>
    <div className="page-content">
        <WatchLaterCard />
    </div>
    <div className="footer"></div>
</div>
  )
}

export default WatchLater