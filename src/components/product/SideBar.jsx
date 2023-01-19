import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import React from 'react';

const SideBar = () => {
  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="search..."
          variant="standard"
        />

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="telephone"
                control={<Radio />}
                label="telephone"
              />
              <FormControlLabel
                value="laptop"
                control={<Radio />}
                label="laptop"
              />
              <FormControlLabel
                value="watch"
                control={<Radio />}
                label="watch"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />

            <FormControlLabel
              value="100"
              control={<Radio />}
              label="less than 100$"
            />
            <FormControlLabel
              value="250"
              control={<Radio />}
              label="less than 250$"
            />
            <FormControlLabel
              value="500"
              control={<Radio />}
              label="less than 500"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
