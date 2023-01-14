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

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  // get one product details
  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({ type: ACTIONS.GET_PRODUCT_DETAILS, payload: data });
  };

  // save edited product

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    // getProducts();
  };

  const values = {
    getProductDetails,
    productDetails: state.productDetails,

    saveEditedProduct,

    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
