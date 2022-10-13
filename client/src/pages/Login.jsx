import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Login({onLog}) {

const [formData,setData] = useState({})
const[data,setUser]=useState('');
const [action,setAction] = useState(true);
const navigate=useNavigate();
function handleChange(event) {
  const name=event.target.name;
  const value=event.target.value;
  setData({
    ...formData,
    [name]: value,
  })

}
function handleAction(){
  setAction(!action)
}
// function handleDeleteClick({id}) {

// }

function handleSubmit(event){
  event.preventDefault()
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((r) => {
    console.log(formData);
    if (r.ok) {
      r.json().then((user) => onLog(user));
    } else {
      r.json().then((err) => alert(err.errors));
    }
  });
}

  return (
    <div>
       
        <form id='log' onSubmit={handleSubmit}>
        
        <h2 className="heading">Medwin Care</h2>
        
            <input type="text" name="username" id="username-field" className="login-button" placeholder="username" onChange={handleChange} required></input>
            <input type="password" name="password" id="password-field" className="login-button" placeholder="Password" onChange={handleChange} required></input>
        
        <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button>

        <Link to="##"><h3 id="password">forgot password?</h3></Link>
        <div className="horizontal">
            <div className="hor"><hr/>
            </div>
            <h3>OR</h3>
            <div className="hor"><hr/>
            </div>
        </div>
        <h3 id="account">Don't have an account? <Link to="#" id="sign">Sign up</Link></h3>
        <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <Link to="#" id="sign" onClick={handleAction}>{action?'Delete':'Login'}</Link></h3>
      </form>
    </div>
  )
}

export default Login
