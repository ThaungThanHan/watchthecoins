import { GET_TOP_5_COINS } from "./ActionTypes";

const initialState = {
    topFiveCoins:[]
}

function Reducers(state=initialState,action){
    switch(action.type){
        case GET_TOP_5_COINS:
            return {...state,topFiveCoins:action.payload};
    }
    return state;
}

export default Reducers;