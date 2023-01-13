import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ACTIONS, JSON_API_PRODUCTS } from '../helpers/consts';

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // getProducts

  const getProducts = async () => {
    const { data } = await axios.get(JSON_API_PRODUCTS);

    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  // addProduct
  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
  };
  const values = { addProduct, getProducts, products: state.products };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
