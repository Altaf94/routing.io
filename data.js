import React, { useEffect } from "react";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Grid, Icon } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Filter from './login.js';
import './App.css';
import Adding from './addproduct.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'




function Show(){
  
  const [datalist,setdatalist] = useState([
    { 
     id:1, 
     city:"Karachi",
     image:"https://images.olx.com.pk/thumbnails/279771675-240x180.webp",
     productname:"FAW carrier Ambulance",
     productprice:"Rs 2,000,000",
    
   },
   { 
    id:2,
    city:"Islamabad",
    image:"https://images.olx.com.pk/thumbnails/288709693-240x180.webp",
    productname:"Samsung Galaxy Note 10",
    productprice:"Rs 68,000",
   
  },
  { 
    id:3,
    city:"Lahore",
    image:"https://images.olx.com.pk/thumbnails/289034928-240x180.webp",
    productname:"5 Marala house for rent",
    productprice:"Rs 70,000",
   
  },
  { 
    id:4,
    city:"Karachi",
    image:"https://images.olx.com.pk/thumbnails/240824580-240x180.webp",
    productname:"Generator 20kwa",
    productprice:"Rs 70,0000",
   
  },
  { 
    id:5,
    city:"Karachi",
    image:"https://images.olx.com.pk/thumbnails/283489937-240x180.webp",
    productname:"Workstation Chair",
    productprice:"Rs 7,000",
   
  },
])


const [filter,setfilter] = useState("")



const [city,setcity] = useState("")


let majorcity = () => {
  let li = datalist.map((x) => x.city);
  li = [...new Set([...li])];
  setcity([...li]); 
};

 
console.log(datalist)


useEffect(() => {
  majorcity()
}, [] )


return(
  
      <div>
   <div>
   <div className="top">
    
    <div className="header">
      <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" alt="photo" width="50px"></img>
      <span className="icon"><DirectionsCarIcon/></span>
      <p className="motor">MOTORS</p>
      <span className="icon"><ApartmentIcon/></span>
      <p className="motor">PROPERTY</p>
   
    </div>
    <div className="top2">
        <img src="https://admiral.digital/wp-content/uploads/2021/07/client-olx-greyscale.png" alt="photo" width="80px" height="50px"></img>
        <span className="city">
        <FormControl  sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-controlled-open-select-label" className="set">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          label="City"
          className="set"
          
        
        >
          <MenuItem value="">  
          </MenuItem>
          <MenuItem>karachi</MenuItem>
          <MenuItem>Lahore</MenuItem>
          <MenuItem>Islamabad</MenuItem>
        </Select>
      </FormControl>
      </span>
      <span ><TextField id="filled-basic" onChange={(e) => setfilter(e.target.value)} label="Enter product name" fvariant="outlined" className="input1"/>
      <p className="logup"><Filter/></p></span>
    

        </div>
    
          </div>
          <div  className="banner">
            <img src="https://images.olx.com.pk/thumbnails/290147312-800x600.webp" md={3} xs={12} sm={6} width="1000px"></img>
          </div>

   </div>
 
   <div className="ads">

   
   {
   datalist.filter((e) => e.productname.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
   .map((e,i) => (
        <div className="hover" key={datalist.id}> 
          <img className="img1" src={e.image} alt=""></img>
          <h5>{e.productname}</h5>
          <p>{e.productprice}</p>

          <p className="check">
            <span><LocationOnIcon fontSize="small"/></span>
            <span className="icon1">
            {e.city}
             </span>
            </p>

          </div>
      ))

      
      
      }

 
   
   
      
          

          </div>
      

      </div>
      


)
}


export default Show;