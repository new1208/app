import React, {useState, useEffect} from 'react';
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { listAll } from "firebase/storage";
import {Box, Input} from '@mui/material';
import {ImageList, ImageListItem} from '@mui/material';
import AppMenu from '../ui/AppMenu';
import { getApps, initializeApp } from 'firebase/app';
import {config} from '../settings/firebaseConfig';


export default function ImageUpload() {
  if (getApps().length===0) {
    initializeApp(config);
  }
  const storage = getStorage();
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0); //add 1 when loaded


  const handleUpload = async function(e){
    console.log(e.target.files[0]);
    try{
      setMessage("");
      const imageRef = ref(storage,e.target.files[0].name);
      await uploadBytes(imageRef, e.target.files[0]);
      console.log('Uploaded a blob or file!');
      const url = await getDownloadURL(imageRef);
      console.log(url);
      setLoaded((currentValue)=>currentValue+1);
    }

    catch(error){
      console.log(error.code);
      if (error.code === "storage/unauthorized"){
        setMessage("尚未登入");
      }
    }
  }

  useEffect(()=>{
    async function readImage() {
      try {
        setMessage("waiting...");
        const listRef = ref(storage, '/');
        const result = await listAll(listRef);
        setImages([]);
        result.items.forEach(async (image) => {         
          let url = await getDownloadURL(image);
          setImages((currentImages)=>[...currentImages,{img:url, title:image.name}]);
        });  
        setMessage("");
      }

      catch(error){
        setMessage("尚未登入");
        console.log(error);
      }
    }

    readImage();
  },[storage, loaded]);

  return (
    <Box>
      <AppMenu/>
      <Input type="file" accept="image/x-png,image/jpeg" onChange={handleUpload}/>
      <br/>{message}
      <ImageList sx={{ width: '100%', height: '100%' }} cols={2} rowHeight={164}>
        {images.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`} 
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}