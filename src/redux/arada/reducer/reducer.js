import * as actionTypes from '../action/type';

const initState = { 
    currentUser:null,
    loading: true,
}

const userReducer = (state=initState, action ) => {
    console.log("Reducer got: ", action.payload);
switch(action.type) {
    case actionTypes.SETUSER:
        return{
            currentUser: action.payload,
            loading: false,
        }

    default:
    return state;
}
}
export default userReducer;