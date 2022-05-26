import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setcurrentchannel } from '../../redux/arada/action/action';

const Channeld = ({channelData, active}) => {
    const {name, channelAvatar} = channelData;
    const dispatch =  useDispatch();
    console.log("Active ID: ",active);
    const changeChannel = (e) => {
        console.log("Pass to reducer: " ,channelData);
  dispatch(setcurrentchannel(channelData));
    }
    return (
    <li className="e-avatar"  onClick={changeChannel}>
        <img src={channelAvatar} alt="Channel-Avtar" className="channel-avatar"/>
        <p className="e-channel-name" id={name}> 
        {name}
        </p>
    </li>
    )
}
export default Channeld;