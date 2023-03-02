import { Product, UserState } from "../../../types";
import { User } from "../../../types";
import {
  addItemToShoppingListActionCreator,
  loginUserActionCreator,
  logoutUserActionCreator,
  removeItemFromShoppingListActionCreator,
  userReducer,
} from "./userSlice";

describe("Given the userReducer funcion", () => {
  describe("When it is invoked with the currentUserState and an action to login the user", () => {
    test("Then it should return the new state with the user logged", () => {
      const currentUserState: UserState = {
        username: "",
        adress: "",
        shoppingList: [],
        isLogged: false,
      };
      const newUser: User = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [],
      };
      const expectedNewUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [],
        isLogged: true,
      };

      const newUserState: UserState = userReducer(
        currentUserState,
        loginUserActionCreator(newUser)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it is invoked and receives a currentUserState and a logout action to log out the user", () => {
    test("Then it should return the new state with the user logged out", () => {
      const currentUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [],
        isLogged: true,
      };

      const expectedNewUserState: UserState = {
        username: "",
        adress: "",
        shoppingList: [],
        isLogged: false,
      };

      const newUserState: UserState = userReducer(
        currentUserState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it is invoked and receives a currentUserState and a add item to shopping list action", () => {
    test("Then it should return the new state with a product in the shopping list", () => {
      const currentUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [],
        isLogged: true,
      };
      const product: Product = {
        id: 1,
        name: "potatoe",
        image: "potatoe.png",
        price: 3,
        category: "tuberculus",
        isAvailable: true,
      };
      const expectedNewUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [product],
        isLogged: true,
      };

      const newUserState = userReducer(
        currentUserState,
        addItemToShoppingListActionCreator(product)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it's invoked and receives a currentUserState and a removeItemFromShoppingCart action to remove an item with id 2", () => {
    test("Then it should return the new state with the item with id 2 removed from the user shopping cart", () => {
      const currentUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [
          {
            id: 2,
            name: "patateta",
            image: "hola",
            price: 2,
            category: "tuberculo",
            isAvailable: true,
          },
        ],
        isLogged: true,
      };
      const idOfItemToRemove = 2;

      const expectedNewUserState: UserState = {
        username: "Alex",
        adress: "Torrelletes",
        shoppingList: [],
        isLogged: true,
      };

      const newUserState: User = userReducer(
        currentUserState,
        removeItemFromShoppingListActionCreator(idOfItemToRemove)
      );

      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});
