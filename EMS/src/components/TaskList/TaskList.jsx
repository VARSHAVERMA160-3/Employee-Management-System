import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div
      id='tasklist'
      className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5 mt-10 px-5'
    >
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return<AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return<NewTask key={idx} data={elem}/>

        }
        if(elem.completed){
          return<CompleteTask  key={idx} data={elem}/>
        }
        if(elem.failed){
          return<FailedTask key={idx} data={elem}/>
        }
      })}
      {/* <AcceptTask/> */}
      {/* <NewTask/> */}
      {/* <CompleteTask/> */}
      {/* <FailedTask/> */}

      {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse maiores quisquam, facilis laborum asperiores velit ad ut iste aliquam est et libero exercitationem eos, ullam numquam quas, ipsa excepturi!
      </p>
      </div> */}
      {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse maiores quisquam, facilis laborum asperiores velit ad ut iste aliquam est et libero exercitationem eos, ullam numquam quas, ipsa excepturi!
      </p>
      </div> */}
      {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse maiores quisquam, facilis laborum asperiores velit ad ut iste aliquam est et libero exercitationem eos, ullam numquam quas, ipsa excepturi!
      </p>
      </div> */}
     
     
      {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
      <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse maiores quisquam, facilis laborum asperiores velit ad ut iste aliquam est et libero exercitationem eos, ullam numquam quas, ipsa excepturi!
      </p>
      </div> */}
      
    </div>
  )
}

export default TaskList
