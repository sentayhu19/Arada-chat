import { type } from '@testing-library/user-event/dist/type';
import * as actionType from './type';

export const setUser = (payload) => ({
type: actionType.SETUSER,
payload,
})

export const cleaUSer = () =>({
    type: actionType.CLEARUSER,
})
export const loadingan = () => ({
    type: actionType.LOADING,
})


//channel

export const setcurrentchannel = (payload) => ({
    type: actionType.SETCURRENTCHANNEL,
    payload,

})
export const  setcurrentChannelId = (payload) =>({
type: actionType.SETCURRENTCHANNELID,
payload
});

export const setPrivateChannel = (payload) => ({
    type: actionType.SETPRIVATECHANNEL,
    payload,  //isChannelPrivate
})

export const setPrivateChannelID = (payload) => ({
    type: actionType.SETPRIVATECHANNEL,
    payload,  //isChannelPrivateID
})

export const setMenu = (payload) => ({    //set to true 
    type: actionType.SETMENU,
    payload
})
export const clearMenu = (payload) => ({   //set to false
    type: actionType.CLEARMENU,
    payload
})