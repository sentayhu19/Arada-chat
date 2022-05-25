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