import { createSlice } from "@reduxjs/toolkit";


let initialState=JSON.parse(localStorage.getItem("cart"))||[]


let Cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state, action) {
            state.push(action.payload); 
            localStorage.setItem('cart',JSON.stringify(state))
          },
          

        remove(state,action){
            let remove=state.filter((mm)=>mm.id !==action.payload)
            localStorage.setItem('cart',JSON.stringify(remove))
            return remove
           
        },
        increment(state,action){
            let abc=state.find((ee)=>ee.id ===action.payload)
            if(abc){
                abc.quantity +=1
            }
            localStorage.setItem('cart',JSON.stringify(state))
        },
        decrement(state,action){
            let abc=state.find((ee)=>ee.id ===action.payload)
            if(abc && abc.quantity >1){
                abc.quantity -=1
            }
            localStorage.setItem('cart',JSON.stringify(state))
        }
    }
})


export let {add,remove,increment,decrement}=Cartslice.actions
export default Cartslice.reducer