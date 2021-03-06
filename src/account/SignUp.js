import React, {useState, useContext} from 'react';
import {Button, TextField} from '@mui/material';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';

export default function SignUp(props) {
    if (getApps().length===0) {
        initializeApp(config);
      }

  const [account, setAccount] = useState({email:"",password:"", displayName:""});
  const [message, setMessage] = useState("");
  const authContext = useContext(AuthContext);

  const handleChange = function(e){
    setAccount({...account,[e.target.name]:e.target.value})
  }

  const handleSubmit = async function(){

        try {
          const auth = getAuth();
          const res = await createUserWithEmailAndPassword(auth, account.email, account.password);
    
          if (res) {
            await updateProfile(auth.currentUser,{displayName: account.displayName});
          }
          setMessage("");
          authContext.setStatus(STATUS.toSignIn);
        }
        catch(error){
          setMessage(""+error);
        }
    
      }
      const changeStatus = function(){
        authContext.setStatus(STATUS.toSignIn);
      }

  return(
    <form>
      <TextField type = "text" name = "displayName" value={account.displayName} 
        placeholder="姓名" label="姓名:" onChange={handleChange} /><br/>
      <TextField type = "email" name = "email" value={account.email} 
        placeholder="電子郵件信箱" label="電子郵件信箱:" onChange={handleChange}/><br/>
      <TextField type = "password" name = "password" value={account.password}
        placeholder="密碼" label="密碼:" onChange={handleChange} autoComplete="current-password"/><br/>
{message}
      <Button variant="contained" color="primary" onClick={handleSubmit}>註冊</Button>
      <Button variant="contained" color="secondary" onClick={changeStatus}>已經註冊，我要登入</Button>
    </form>
  )
}