import React from 'react';
import { CssBaseline, Grid } from '@mui/material';

import Header from './components/Header/Header';  
import List from './components/List/List';
import Map from './components/Map/Map';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* Inline stiles below need to be an obj */}
      <Grid container spacing={3} style={{ width: '100%'}}>
        {/* xs={12} means takes up 12 grid spaces on mobile devices md={4} only four grid spaces on larger */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
        <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;