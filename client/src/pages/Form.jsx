import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Form({dataa}) {

  const [formData,setData] = useState({})
const[data,setUser]=useState('');
const [action,setAction] = useState(true);
const navigate=useNavigate();

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
function handleAction(){
  setAction(!action)
}
// function handleDeleteClick({id}) {

// }

function handleSubmit(event){
    const item=data.find(item=>item.email===formData.email)
    if (item && item.password===formData.password){
      if(action){
        alert('Login Successfull !...')
        event.target.reset()
        navigate('/menu')
      }
      else{
        fetch(`http://localhost:9292/users/${item.id}`, {
          method: "DELETE",
        })
      alert(`User Account Deleted succesfully`)
      event.target.reset()
      navigate('/')
      }
    }else{
      event.preventDefault();
      alert('Login Failure! Wrong email or password!')
    };
}




  return (
    <div className="image2">
        <div className='overlay'>
          <div className="all">
          {dataa}
          </div>
         </div>
    </div>
  )
}

export default Form
