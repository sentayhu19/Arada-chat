import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setcurrentchannel } from '../../redux/arada/action/action';
import { setcurrentChannelId } from "../../redux/arada/action/action";
import { setPrivateChannel } from '../../redux/arada/action/action';
const Channeld = ({channelData, active,handleMenu}) => {
    const {name, channelAvatar} = channelData;
    const dispatch =  useDispatch();
    const changeChannel = (e) => {
      dispatch(setPrivateChannel(false));   //setChannel Public
  dispatch(setcurrentchannel(channelData));
  dispatch(setcurrentChannelId(channelData.id));
  handleMenu();
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