import ProductAdd from './ProductAdd'
import { Dialog,Box, Fab, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AppMenu from '../ui/AppMenu';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import { getFirestore } from "firebase/firestore";
import { getApps, initializeApp } from 'firebase/app';
import {collection, getDocs} from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import { List, ListItem, ListItemText } from '@mui/material';
import { deleteDoc, doc} from '@firebase/firestore';
import {config} from '../settings/firebaseConfig';


export default function ProductList() {
  //const app = initializeApp(firebaseConfig);
  if (getApps().length===0) {
    initializeApp(config);
  }
const db = getFirestore();
const [isLoading, setIsLoading] = useState(false);
const [open, setOpen] = useState(false);
const [deleted, setDeleted] = useState(false);


  const [products, setProducts] = useState([
    {desc:"iPad", price:20000},
    {desc:"iPhone X", price:30000}
   ]);

 //  const [currentProduct, setcurrentProduct] = useState({desc:"",price:0});
   const authContext = useContext(AuthContext);
   useEffect(()=>{
    async function readData() {
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "product"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        temp.push({desc:doc.data().desc, price:doc.data().price});     
      });

      console.log(temp);

      setProducts([...temp]);
      setIsLoading(false);
    }

    readData();
  },[db, open, deleted]);

  
  const insert = function(newProduct){
    setProducts(oldProducts=>[...oldProducts, newProduct]);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = async function(id){
    try{
      setIsLoading(true);
      await deleteDoc(doc(db, "product", id));
      //console.log("deleted");
      setDeleted(deleted+1);
      setIsLoading(false);
    }

    catch (error){
      console.log(error);
    }
  };

<AppMenu/>

const ProductListComponent = function (){
  return (
    <List subheader="Product list" aria-label="product list">
    {products.map((product, index) => 
      <ListItem divider key={index}>
        <ListItemText primary={product.desc} secondary={"NT$"+product.price}></ListItemText>
        <IconButton edge="end" aria-label="delete" onClick={()=>deleteData(product.id)}>
          <DeleteIcon />
        </IconButton>
        <Dialog onClose={handleClose} open={open}>
        <ProductAdd update={insert} product={product} close={handleClose}/>
        </Dialog>;
        
      </ListItem>)
      }
      {(authContext.status===STATUS.toSignIn)?
        <Box></Box>:
          <Box sx={{width:'100vw',textAlign:"center"}}>
          <Fab size="medium" color="secondary" aria-label="add" onClick={()=>setOpen(true)}>
              +
            </Fab>
            </Box>
            }
            
    </List>
    
  )
}

return (

    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'background.paper',
      color: 'black',
      textAlign: 'left'
    }}>

    <AppMenu/>

    {!isLoading ?
      <ProductListComponent/>
       :
        <CircularProgress />

    }
    </Box>);

}