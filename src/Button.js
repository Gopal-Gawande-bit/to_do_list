import React from 'react'
import { Button as Muibutton } from '@mui/material'



export default function Button(props){
    return(
        <>
      <Muibutton variant="contained" onClick={props.onClick} disabled={props.disabled} >
  Add Task
</Muibutton>

        </>
    )
}