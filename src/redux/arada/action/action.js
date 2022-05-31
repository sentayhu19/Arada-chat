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