import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Form({dataa}) {




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
