import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {useState} from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Button';
import {Navigate} from 'react-router-dom'
import Adding from './addproduct.js';






function Filter(){
   return (
    <div>
      <label for="show">login</label>
      <input type="checkbox" id="show" className="hidden"></input>
      <div className="container">
         <label for="show"></label>
         <h1>Login Form</h1>
         <p><TextField className="email" id="outlined-basic" label="Email or Phonenumber" variant="outlined" required /></p>
         <p><TextField id="outlined-basic" label="password" variant="outlined" type="password" required/></p>
         <Link href="#">Forgot Password?</Link>


         <p><a href='check'><Button variant="contained">LOGIN</Button></a></p>
       





         <p>Not a member? <Link href="https://google.com">Signup now</Link></p>


        
         


      </div>
    </div>
    )
}

export default Filter;