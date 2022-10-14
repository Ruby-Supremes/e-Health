
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp() {
const [formData,setData] = useState({});
const[data,setUser]=useState('');
const navigate = useNavigate()
useEffect(()=>{
  fetch('')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])
  function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
      ...formData,
      [name]: value,
    })
  }


    function handleSubmit(event){
      event.preventDefault()
       fetch("/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
            // console.log(user);
          });
        }
      });
    }



  return (
    <form action="" onSubmit={handleSubmit}>
        <h2 className="heading">Medwin Care</h2> 
        <input type="text" name="username" id="username-field" className="login-button" placeholder="username" onChange={handleChange} required></input>        
        <input type="text" name="experience" className="login-button" placeholder="experience" onChange={handleChange} required></input> 
        <input type="text" name="specialization"  className="login-button" placeholder="specialization" onChange={handleChange} required></input> 
        <input type="text" name="image" className="login-button" placeholder="image" onChange={handleChange} required></input> 
        <input type="password" name="password"  className="login-button" placeholder="password" onChange={handleChange} required></input> 
        <button type='submit' className='log' id='logIn'>Sign Up</button>
    </form>
  )
}

export default SignUp
