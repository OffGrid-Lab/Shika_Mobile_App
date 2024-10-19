import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export class Redux {
  public dispatch: Dispatch;

  constructor() {
    this.dispatch = useDispatch();
  }

  Dispatch() {
    return useDispatch();
  }
  select() {
    return useSelector.withTypes<RootState>();
  }
}
