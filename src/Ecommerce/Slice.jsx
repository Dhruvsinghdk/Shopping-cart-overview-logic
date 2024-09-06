import { createSlice } from "@reduxjs/toolkit";



const Slice = createSlice({
    name:"cart",
    initialState:{
        item:[],
        qty:0
    },
    reducers:{
        addtocart:(state , actions)=>{
          state.item.push(actions.payload)
          state.qty = state.qty+1
        },
        clearcart:(state,actions)=>{
            state.item = [],
            state.qty = 0
        },

        recDelete:(state, actions)=>{
            state.item = state.item.filter(e => e.id!=actions.payload);

            state.qty = state.qty-1;
         }        
    }
})


export default Slice.reducer;
export const {addtocart,clearcart,recDelete} = Slice.actions;
 