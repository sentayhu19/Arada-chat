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
    isChannelPrivate: false,
}
const channelReducer = (state=initChannelState, action) =>{
    switch(action.type){
        
        case actionTypes.SETCURRENTCHANNEL:
            return {
        ...state,
        currentChannel: action.payload,
            }
            case actionTypes.SETCURRENTCHANNELID :
                console.log("reducer SETCURRENTCHANNELID: ", action.payload);
                    return {
                        ...state,
                        currentChannelID: action.payload,
                        loading: false,
                    }
                    case actionTypes.SETPRIVATECHANNEL: 
                    console.log("reducer SETPRIVATECHANNEL: ", action.payload);
                    return {
                        ...state,
                        isChannelPrivate: action.payload,
                    }
                    case actionTypes.SETPRIVATECHANNELID:
                        return{
                            ...state,
                        currentChannelID: action.payload,
                        }
        default:
            return state;
    }

}
const initMenuState = {
    isMenuOpen:false,
}
const menuReducer = (state=initMenuState, action) => {
    switch (action.type){
        case actionTypes.SETMENU:
            return {
                ...state,
                isMenuOpen: action.payload,
            }
            case actionTypes.CLEARMENU:
                return {
                    ...state,
                    isMenuOpen: action.payload,
                }
            default:
                return state;
    }
}
export  {userReducer, channelReducer, menuReducer};