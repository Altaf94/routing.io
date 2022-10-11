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
import Avatar from '@mui/material/Avatar';






function Logout(){
   return (
    <div>
      <p><a href='/'><Button> <Avatar className='Avatar' alt="Remy Sharp" src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/11/Smart-Boy-Dp-for-Whatsapp-Pics-Pictures-Free-Download.jpg" />
 </Button></a></p>
     
    </div>
    )
}

export default Logout;