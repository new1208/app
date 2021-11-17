import React, {useState} from 'react';
import { Input, Button, TextField} from '@mui/material';
import {getFirestore, collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from '@firebase/firestore';

export default function ProductAdd(props) {
  const [product, setProduct] = useState({desc:"",price:0})
  const [message, setMessage] = useState("");
  const handleClose = function(e){
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const action = !props.product.id ? "新增" : "修改"

  const update = async function(){
    try {
      const db = getFirestore();
      setMessage("");
      if (action === "新增"){
        let docRef =  await addDoc(collection(db, "product"),{
      desc:product.desc,
      price:parseInt(product.price)
      });
    console.log(docRef.id);
  }
  else {
    await setDoc(doc(db,"product",product.id),{
      desc:product.desc,
      price:parseInt(product.price)
    });
    }
  }
    catch(e){
      console.log(e.code);
      if (e.code==="permission-denied"){
        setMessage("尚未登入!!");
      }
    }
    props.close();
  }
    props.update(product);
    addDoc(product)
  

  return (
    <div>
    <TextField label ="產品描述" variant="outlined" name="desc" value={product.desc} onChange={handleClose}/><br/>
    產品價格:<Input type="number" name="price" value={product.price} onChange={handleClose}/><br/>

    <Button variant="contained" href="#contained-buttons" onClick={update}>新增</Button>
    {message}
    </div>
 
    
  );

  
}