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
import Logup from './loginup.js'; 




function Adding(){

   const [newdata,setnewdata] = useState(
      { 
         city:"",
         image:"",
         productname:"",
         productprice:"",
        
       },
   )

   const [record,setrecord] = useState([
      {}
   ])

   

   let get = (e) => {
      let see = e.target.name;
      let seenow = e.target.value;
      console.log(see, seenow )
      setnewdata({...newdata, [see]: seenow})
   };


   let submit = (e) => {
      e.preventDefault();
      const newrecord = {...newdata , id: new Date().getTime().toString()}
      
      console.log(record)
      setrecord([newrecord,...record])
      
      console.log(record)
      



      
   };
   


   return (
      
    <div className='addproduct'>
      <form onSubmit={submit}>
        <h1>Add Product</h1>
         <p><TextField className="email" name='productname' value={newdata.productname} id="outlined-basic" label="Productname" variant="outlined" onChange={get} required /></p>
         <p><TextField id="outlined-basic" for="productprice" name='productprice' value={newdata.productprice} label="ProductPrice" variant="outlined" onChange={get} required/></p>
         <p><TextField id="outlined-basic" for="city"label="City" name='city' value={newdata.city} variant="outlined" onChange={get} required/></p>
         <p><TextField id="outlined-basic" for="url"label="image url" name='image' value={newdata.image} variant="outlined" onChange={get} required></TextField></p>
         <p><a href='/' ><Button onClick={submit} variant="contained">ADD</Button></a></p>
         </form>
       
    </div>
   )
      
}

export default Adding;