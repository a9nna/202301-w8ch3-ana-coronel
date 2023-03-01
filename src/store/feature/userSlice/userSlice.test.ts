import { UserState } from "../../../types";
import { User } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the userReducer funcion", () => {
  describe("When is invoke with the currentUserState and an action to login the user", () => {
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
});
