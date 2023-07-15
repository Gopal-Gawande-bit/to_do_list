import React from 'react'
import { Button as Muibutton } from '@mui/material'


export default function Todolist(props) {
  return (
    <div>


       <li> 



         {/* <button onClick={()=>{
        props.onSelect(props.id)
      }}>-</button>{props.text} */}

           <Muibutton variant="outlined" onClick={ ()=>{
            props.onSelect(props.id)
           }} >
  X
</Muibutton> 

       {props.text}


       </li>
   

 

    </div>
  )
}
