import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Aside from "./aside pannel/Aside";
import ColorPannel from "./ColorPannel/ColorPannel";
import Messages from "./Messages/Messages";
import MetaPannel from "./Meta Pannel/MetaPannel";
import logo from '../images/arada-logo.png';
const App = () => {
  const { loading } = useSelector((state)=> state.userReducer);
  if(loading===true){
     return (
     <div className="loading-screen-wrap">
      <img src={logo} alt="logo" className="loading-logo"/>
       <i className="loading-screen"/>
       </div>
     )
  }
  return (
    <div className="all-comp">
    <ColorPannel/>
    <Aside/>
    <Messages/>
    <MetaPannel/>
    </div>
  );
}

export default App;
