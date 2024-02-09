import { createSlice } from "@reduxjs/toolkit";

export interface ISalesInfo {
  QuantityOfTheProduct:string,
  NameOfTheBuyer:string,
  DateOfTheSale:string
}
const initialState:ISalesInfo = {
  QuantityOfTheProduct:"",
  NameOfTheBuyer:"",
  DateOfTheSale:""
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = salesSlice.actions;

export default salesSlice.reducer;
