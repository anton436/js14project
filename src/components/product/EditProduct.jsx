import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [product, setProduct] = useState(productDetails);

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  console.log(product);

  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <Typography align='center' variant='h4' element='h2'>
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handleInp}
        fullWidth
        name='name'
        id='outlined-basic'
        label='name'
        variant='outlined'
        value={product.name || ''}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='descr'
        id='outlined-basic'
        label='description'
        variant='outlined'
        value={product.descr || ''}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='price'
        id='outlined-basic'
        label='price'
        variant='outlined'
        value={product.price || ''}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='picture'
        id='outlined-basic'
        label='picture'
        variant='outlined'
        value={product.picture || ''}
      />
      <TextField
        onChange={handleInp}
        fullWidth
        name='type'
        id='outlined-basic'
        label='type'
        variant='outlined'
        value={product.type || ''}
      />
      <Button
        onClick={() => {
          saveEditedProduct(product);
          navigate('/products');
        }}
        variant='outlined'
        fullWidth
        size='large'
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
