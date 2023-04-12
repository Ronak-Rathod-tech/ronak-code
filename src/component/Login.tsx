import React from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    
    <Typography gutterBottom variant='h3' align='center'>
      Login Form
    </Typography>
    
    <Card style={{maxWidth:500, margin:"0 auto", padding:"20px 5px"}}>
      <CardContent>
      <Typography gutterBottom variant='h5'>
      Login
    </Typography>
      <form>
        <Grid container spacing={1}>
          <Grid xs={12} item>
              <TextField type='email' label="Email" placeholder='Enter Email' fullWidth required/>
          </Grid>
          <Grid xs={12} item>
              <TextField type='password' label="Password" placeholder='Enter Password' fullWidth required/>
          </Grid>
          <Grid xs={12} item>
              <Button type='submit' variant='contained' color='primary' fullWidth>Login</Button>
          </Grid>
        </Grid>
        </form>
      <p className='my-3'>You have no Register?<Link to="/register">Register here</Link> </p>
      </CardContent>
    </Card>
    
    </>
    
  )
}

export default Login
