import React, { useState,useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {

const [userData,setUserData] =useContext(AuthContext)
// console.log(userData);


const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')


// const[newTask,setNewTask]=useState({})

useEffect(() => {
  const savedData=JSON.parse(localStorage.getItem("employees"));
  if(savedData){
    setUserData(savedData);
  }
}, [])

const submitHandler =(e)=>{
e.preventDefault()
// console.log(taskDate,taskDescription,assignTo,taskTitle,category)
const newTask={
  title:taskTitle,
  description:taskDescription,
  date:taskDate,
  category,
  active:false,
  newTask:true,
  failed:false,
  completed:false
};
// console.log(task);
// const data=JSON.parse(localStorage.getItem('employees'))
// console.log(data);

const data=userData
// console.log(data);

const updatedData = userData.map((employee) => {
  if (employee.firstName === assignTo) {
    return {
      ...employee,
      tasks: [...(employee.tasks || []), newTask],
      taskCounts: {
        ...employee.taskCounts,
        newTask: (employee.taskCounts?.newTask || 0) + 1,
      },
    };
  } else {
    return employee;
  }
});
// console.log(data);
// localStorage.setItem('employees',JSON.stringify(data))
setUserData(updatedData)
localStorage.setItem("employees", JSON.stringify(updatedData));

// console.log(data);

  setAssignTo('')
  setCategory('')
  setTaskTitle('')
  setTaskDate('')
  setTaskDescription('')


}

  return (
<div  className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>
          {
            submitHandler(e)
          }
        }  className='flex flex-wrap w-full  items-start justify-between'>
         <div className='w-1/2'>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Make A UI Design' />
          </div>
          <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input
          value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
        className='text-sm py-1 px-2 w-4/5 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
        </div>
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input 
          value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
        className='text-sm py-1 px-2 w-4/5 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' /></div>
       
       <div><h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input 
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
        className='text-sm py-1 px-2 w-4/5 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design or Dev' />
        </div>
          
          </div>
          <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }} 
        className='text-sm py-1 px-2 w-4/5 rounded outline none bg-transparent border-[1px] border-gray-400 ' name="" id="" rows="11" cols="22" ></textarea>
        <button className='bg-emerald-400 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

        </div>
        
        </form>
      </div>  )
}

export default CreateTask