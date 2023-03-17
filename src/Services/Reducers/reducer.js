import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants";

const initialstate={
    cardData:[]
}
export default function carditems(state=[],action){
switch(action.type){
    case ADD_TO_CART:
        console.log('reducer',action)
        return[
            ...state,
            {cardData:action.data}
        ]
        break;
        case REMOVE_FROM_CART:
            console.log('reducer',action)
            state.pop();
            return[
              ...state
            ]
            break;
        default:
            return state;
}
}