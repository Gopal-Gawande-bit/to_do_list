import React from 'react'

export default function Todolist(props) {
  return (
    <div>
      <li>  <button onClick={()=>{
        props.onSelect(props.id)
      }}>-</button>{props.text}</li>
    </div>
  )
}
