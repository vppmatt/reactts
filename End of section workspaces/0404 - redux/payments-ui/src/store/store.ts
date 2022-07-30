import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PaymentsStoreType = {
    countries : string[],
    lastFetch: number,
    username : string}

const initialState : PaymentsStoreType = { countries : [], lastFetch: new Date().getTime(), username: ""};

const paymentsSlice = createSlice( {
    name : "payments",
    initialState : initialState,
    reducers : {
        login : (state, action : PayloadAction<string>) => {
          state.username=action.payload
        },
        logout : (state) => {
            state.username = "";
        },
       replaceCountries : (state, action: PayloadAction<string[]> ) => {
           state.countries = action.payload;
           state.lastFetch = new Date().getTime();
       }
    }
});

export const {login, logout, replaceCountries} = paymentsSlice.actions;

const store = configureStore({ reducer: paymentsSlice.reducer});

export default store;
