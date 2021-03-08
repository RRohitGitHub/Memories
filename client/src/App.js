import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import useStyles from './styles'
import { getPosts } from './actions/posts'

function App(){

  const classess =  useStyles()
  // hook
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return(
      <Container maxidth="lg">
            <AppBar className={classess.appBar} position="static" color="inherit">  
              {/* Typography is for textual elements */}
              <Typography className={classess.heading} variant="h2" align="center">Memories</Typography>
              <div align="center">
                <img className={classess.image} src={memories}  height="100" alt="memories"/>                
              </div>
            </AppBar>

            {/* Provides animation */}
            <Grow in>
              <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form/>
                  </Grid>
                </Grid>
              </Container>
            </Grow>

      </Container>
  )
}

export default App