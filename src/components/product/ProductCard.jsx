import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();

  const navigate = useNavigate();
  return (
    <Card sx={{ width: '20%', margin: '1rem' }}>
      <CardMedia
        sx={{ height: 200 }}
        image={item.picture}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.descr}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          $ {item.price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.type}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button size='small' onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size='small'>Details</Button>
        <Button size='small' onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}