import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, User, UserState } from "../../../types";

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
    addItemToShoppingList: (
      currentUserState: UserState,
      action: PayloadAction<Product>
    ): UserState => ({
      ...currentUserState,
      shoppingList: [...currentUserState.shoppingList, action.payload],
    }),
    removeItemFromShoppingList: (
      currentUserState: UserState,
      action: PayloadAction<Product["id"]>
    ): UserState => ({
      ...currentUserState,
      shoppingList: currentUserState.shoppingList.filter(
        (item) => item.id !== action.payload
      ),
    }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
  addItemToShoppingList: addItemToShoppingListActionCreator,
  removeItemFromShoppingList: removeItemFromShoppingListActionCreator,
} = userSlice.actions;
