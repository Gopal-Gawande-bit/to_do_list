import React,{useEffect, useState} from 'react'
import Todolist from './Todolist';
import Input from './Input';
import Button from './Button';
import { Grid } from '@mui/material';
import useStyles from './style';

export default function App() {
  const[task,setTask]=useState(' ');
  const[taskList,setTaskList]=useState([])
  const[isEmpty,setIsEmpty]=useState(true);

  useEffect( ()=>{
    if(task==' '){
      setIsEmpty(true)
    }
    else{
      setIsEmpty(false)
    }

    
  } ,[task] )
  
  
  const classes=useStyles();
  

  
  const changeValue=(event)=>{
     setTask(event.target.value)
     console.log("cv",event.target.value)
     console.log("task",task)
  }

  const addTask=()=>{
  

    setTaskList((olditem)=>{
      return [...olditem,task];
    });
   
    setTask(" ");
    
    
  }

  const deleteTask=(id)=>{
    setTaskList((olditem)=>{
      return olditem.filter((arrayelement,index)=>{
        return index!==id;
      })
    })
  }



  return (
    <>
    
    <div className="main-div">

 <Grid container justifyContent='center'>  
     <div className={`center-div ${classes.centerDiv}`}>
      <h1>To-Do-List</h1>
      <Input onChange={changeValue} value={task} />
      <Button onClick={addTask} disabled={isEmpty}/>
      {console.log("isEmpty",isEmpty)}

      <ol>
{taskList.map((element,index)=>{
  return (
 <Todolist text={element} key={index} onSelect={deleteTask} id={index}
/>
  );
})}
      </ol>
     </div>
     </Grid>
    </div>
    
    
    
    
    
    </>
  )
}
