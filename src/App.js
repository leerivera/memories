import React, { useState, useEffect }from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; 

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles';

import memories from './images/memories.png'
const App = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
      <Container maxwidth="lg">

          <AppBar className={classes.appBar} position="static" color="inherit" >

             <Typography className={classes.heading} variant="h2" align="center">Throw Backs</Typography>

             <img className={classes.image} src={memories} alt="meomories" height="60"/>

           </AppBar>
           
        <Grow in>
          <Container>
           <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            </Grid>
           </Container>
        </Grow>
      </Container>

        
    )
}

export default App;