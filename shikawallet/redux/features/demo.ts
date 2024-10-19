

import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";


export interface EmptyState {
    status: "idle";
    demo: string;


}

const initialState: EmptyState = {
    status: "idle",
    demo: "",

};

// If you are not using async thunks you can use the standalone `createSlice`.
const Slice = createAppSlice({
    name: "demo",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({


        setDemo: create.reducer(
            (state, action: PayloadAction<string>) => {
                state.demo = action.payload;
            },
        ),



    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {

        selectDemo: (x) => x.demo,


    },
});

// Action creators are generated for each case reducer function.
export const {
    setDemo,
} = Slice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
    selectDemo

} = Slice.selectors;


export const emptySlice = Slice;