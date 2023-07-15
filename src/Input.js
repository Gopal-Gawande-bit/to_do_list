import React from 'react'


import TextField from '@mui/material/TextField';



export default function Input(props) {
  return (
    <div>
      <TextField id="standard-basic" label="Add Task!" variant="standard" onChange={props.onChange} value={props.value}/>
      
    </div>
  )
}
