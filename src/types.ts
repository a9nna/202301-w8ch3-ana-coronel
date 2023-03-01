export interface User {
  username: string;
  adress: string;
  shoppingList: Products;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  isAvailable: boolean;
}

export type Products = Product[];
