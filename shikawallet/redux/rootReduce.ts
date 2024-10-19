import { combineSlices } from "@reduxjs/toolkit";
import { emptySlice } from "./features/demo";
import { otpSlice } from "./features/oneTimeCode";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(emptySlice, otpSlice);

export default rootReducer;
