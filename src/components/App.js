import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Aside from "./aside pannel/Aside";
import ColorPannel from "./ColorPannel/ColorPannel";
import Messages from "./Messages/Messages";
import MetaPannel from "./Meta Pannel/MetaPannel";
const App = () => {
  const { loading } = useSelector((state)=> state.userReducer);
  if(loading===true){
     return (
     <div className="loading-screen-wrap">
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
