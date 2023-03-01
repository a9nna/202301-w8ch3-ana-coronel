import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types";

const initialUserState: UserState = {
  username: "",
  adress: "",
  isLogged: false,
  shoppingList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...initialUserState }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
