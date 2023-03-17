import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants'

export const addToCart=(data)=>{
    console.log('action',data)
return{
    // type:'ADD_TO_CART'
    type:ADD_TO_CART,
    data:data
}
}
export const removefromCart=(data)=>{
return{
    // type:'ADD_TO_CART'
    type:REMOVE_FROM_CART,
}
}