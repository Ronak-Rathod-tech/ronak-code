import React from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
import {inputFormElements} from '../formElements'

const Register = () => {
  return (
    <>

      <Typography gutterBottom variant='h3' align='center'>
        Registration Form
      </Typography>

      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Register
          </Typography>
          <form>
            <Grid container spacing={1}>
              {
                inputFormElements.map(input => <Grid xs={input.xs} item>
                  <TextField {...input}/>
                </Grid>)
              }
              <Grid xs={12} item>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* <Grid xs={12} item>
                <TextField label="First Name" placeholder='Enter First Name' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Middle Name" placeholder='Enter Middle Name' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Last Name" placeholder='Enter Last Name' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' label="Email" placeholder='Enter Email' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type='number' label="Phone" placeholder='Enter Phone Number' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Country" placeholder='Enter Country Name' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="City" placeholder='Enter City Name' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type='date' label="Date Of Birth" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid> */}
              <Grid xs={12} item>
                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Register
