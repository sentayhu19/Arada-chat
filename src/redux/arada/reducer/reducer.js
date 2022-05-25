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
        case actionTypes.CLEARUSER:
            return {
                ...initState,
                loading: false,
            }
            case actionTypes.LOADING:
                return {
                    ...state,
                    loading: true,
                }

    default:
    return state;
}
}
export default userReducer;