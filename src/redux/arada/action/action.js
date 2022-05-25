import * as actionType from './type';

export const setUser = (payload) => ({
type: actionType.SETUSER,
payload,
})

export const cleaUSer = () =>({
    type: actionType.CLEARUSER,
})