import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loginRequest", (state) => {
      state.loading = true;
    })
    .addCase("loginSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuth = true;
    })
    .addCase("loginFailure", (state, action) => {
      state.loading = false;
      state.isAuth = false;
    });
});

export default userReducer;
