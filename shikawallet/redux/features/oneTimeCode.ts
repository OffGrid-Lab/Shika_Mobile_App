import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";

export type OtpParams = {
  index: number;
  value: string;
};

export interface OtpState {
  status: "idle";
  countryCode: string;
  phoneNumber: string;
  otpCode: string[];
}

const initialState: OtpState = {
  status: "idle",
  countryCode: "+233",
  phoneNumber: "",
  otpCode: [],
};

// If you are not using async thunks you can use the standalone `createSlice`.
const Slice = createAppSlice({
  name: "otp",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    setOTPcode: create.reducer((state, action: PayloadAction<OtpParams>) => {
      state.otpCode[action.payload.index - 1] = action.payload.value;
    }),
    setPhoneNumber: create.reducer((state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    }),
    setCountryCode: create.reducer((state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectOTPcode: (x) => x.otpCode.join(""),
    selectPhoneNumber: (x) => x.phoneNumber,
    selectCountryCode: (x) => x.countryCode,
  },
});

// Action creators are generated for each case reducer function.
export const { setOTPcode, setPhoneNumber, setCountryCode } = Slice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectOTPcode, selectPhoneNumber, selectCountryCode } =
  Slice.selectors;

export const otpSlice = Slice;
