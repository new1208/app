import React, {useState, useContext} from 'react';
import {Button} from '@mui/material';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';

export default function SignOut(props) {
  if (getApps().length===0) {
    initializeApp(config);
  }

  const [message, setMessage] = useState("");
  const authContext = useContext(AuthContext);
  const handleSubmit = async function(){
    try {
      const auth = getAuth();
      await signOut(auth);
      setMessage("");
      props.setStatus("signIn");
    }

    catch(error){
      setMessage(""+error);
      authContext.setStatus(STATUS.toSignIn);
    }
  }

  return(
    <form>
      <Button variant="contained" color="primary" onClick={handleSubmit}>登出</Button>
      {message}<br/>
    </form>

  )

}