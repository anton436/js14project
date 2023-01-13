import React from 'react';
import AddProduct from '../components/product/AddProduct';
import { useProducts } from '../contexts/ProductContextProvider';

const AdminPage = () => {
  return (
    <div>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
