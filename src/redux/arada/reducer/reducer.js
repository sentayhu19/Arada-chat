import * as actionTypes from '../action/type';

const initState = { 
    currentUser:null,
    loading: true,
    currentChannelID:'',
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
                    return {
                        ...state,
                        currentChannelID: action.payload,
                    }
        default:
            return state;
    }

}
export  {userReducer, channelReducer};