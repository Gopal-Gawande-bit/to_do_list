import React,{useEffect, useState} from 'react'
import Todolist from './Todolist';
import Input from './Input';

export default function App() {
  const[task,setTask]=useState("");
  const[taskList,setTaskList]=useState([""])
  

  const array=["gopal","rishi","aditya"];
  

  
  function changeValue(event){
    setTask(event.target.value);

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

     <div className="center-div">
      <h1>To-Do-List</h1>

      {/* <input type="text" onChange={changeValue} value={task} /> */}
      <Input  onChange={changeValue} value={task}/>
      <button onClick={addTask}>+</button>

      <ol>

        {/* {   taskList.map(tasks=>{return(<li>{tasks}</li>)})            } */}

{taskList.map((element,index)=>{
  return (
 <Todolist text={element} key={index} onSelect={deleteTask} id={index}
/>
  );
})}

      </ol>



     </div>




    </div>
    
    
    
    
    
    </>
  )
}
