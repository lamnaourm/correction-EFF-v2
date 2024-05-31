import { configureStore, createSlice } from "@reduxjs/toolkit";


const calculSclice = createSlice({
    name:"",
    initialState:{
        listeSimulation: []
    },
    reducers: {
        ajouter:(state, action) =>{
            state.listeSimulation = [...state.listeSimulation, action.payload]
        },
        vider:(state, action) =>{
            state.listeSimulation = []
        }
    }   
})

const store = configureStore({reducer:calculSclice.reducer})
export default store;
export const {ajouter, vider} = calculSclice.actions