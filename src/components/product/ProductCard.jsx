import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { useCart } from '../../contexts/CartContextProvider';
import { useAuth } from '../../contexts/AuthContextProvider';
import { ADMIN } from '../../helpers/consts';

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  const {
    user: { email },
  } = useAuth();

  return (
    <Card sx={{ width: '16rem', margin: '1rem' }}>
      <CardMedia component="img" image={item.picture} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name.slice(0, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descr.slice(0, 100)}
        </Typography>
        <Typography variant="h5" sx={{ color: 'green' }}>
          $ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.type}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex' }}>
        {email === ADMIN ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              Edit
            </Button>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
              color={checkProductInCart(item.id) ? 'primary' : ''}
            />
          </IconButton>
        )}

        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
