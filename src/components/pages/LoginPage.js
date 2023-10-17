import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../css/Loginpage.css'
import { loginaction } from '../../action/loginAction';

const LoginPage = () => {

    // const regexPattern = /^users@123$/;

 const [username,setUsername] = useState("");
 const [password,setpassword] = useState(null);
 const [mobileNumber,setMobileNumber] = useState("");
 const [disableButton,setDisablebutton] = useState(true);
 const [credentials,setCredentials] = useState(null);

 const dispatch = useDispatch();
 const loginData = useSelector(state => state)




 const userHandler = (e) => {
    setUsername(e.target.value)
 }

 const passwordHandler = (e) => {
    const {value} = e.target
    if (value.length > 0) {
        setDisablebutton(false)
       
    }
    if (value.length < 8){
        setDisablebutton(true)
      
    }
    if (value.length <= 10){
        setpassword(value.trim())
    }
 }


 const mobileHandler = (e) => {
    const {value} = e.target
   if (value.length > 0 ){
     setDisablebutton(true)
   }
   if (value.length > 10){
    setDisablebutton(false)
   }
   if(value.length <= 9){
     setMobileNumber(value)
   }
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(mobileNumber && password && username){
        setCredentials({userName:username,Password:password,mobilenumber:mobileNumber})
        dispatch(loginaction(credentials))
    }else{
        console.log("something went wrong")
    }
 }

 console.log(loginData)


  
  return (

    <div className="container login-container">
    <h2 className="text-center">Login</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" onChange={userHandler} />
    </div>
    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={passwordHandler} />
    </div>
    <div className="mb-3">
        <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
        <input type="number" className="form-control" id="mobile" placeholder="Enter your Mobile No" onChange={mobileHandler} />
    </div>
    {disableButton ? (
        <button type="submit" className="btn btn-primary">Login</button>
    ) : (
        <button type="submit" className="btn btn-primary" disabled>Login</button>
    )}
</form>

</div>
    
  )
}

export default LoginPage
