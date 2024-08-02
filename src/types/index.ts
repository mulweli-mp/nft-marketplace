import React, { Dispatch } from "react";

export interface CartItem {
  id: number;
  name: string;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } };

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}
