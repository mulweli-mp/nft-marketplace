import React, { Dispatch } from "react";

export interface CartItem {
  id: number;
  image: string;
  background: string;
  title: string;
  date: string;
  qty: number;
  btcPrice: number;
  usdPrice: number;
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
