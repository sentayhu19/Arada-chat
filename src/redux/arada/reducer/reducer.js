import * as actionTypes from '../action/type';

const initState = { 
    currentUser:null,
    loading: true,
}

const userReducer = (state=initState, action ) => {
switch(action.type) {
    case actionTypes.SETUSER:
        return{
            currentUser: action.payload,
            loading: false,
        }
        case actionTypes.CLEARUSER:
            return {
                ...state,
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

const initChannelState = {
    currentChannelID:'',
    currentChannel:[],
}
const channelReducer = (state=initChannelState, action) =>{
    switch(action.type){
        case actionTypes.SETCURRENTCHANNEL:
            return {
        ...state,
        currentChannel: action.payload,
            }
            case actionTypes.SETCURRENTCHANNELID :
                console.log("REDUCER GOT AS NEW ID", action.payload);
                    return {
                        ...state,
                        currentChannelID: action.payload,
                        loading: false,
                    }
        default:
            return state;
    }

}
export  {userReducer, channelReducer};