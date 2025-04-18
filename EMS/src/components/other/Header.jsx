import React, { useEffect, useState } from 'react'

const Header = (props)=>{
  // console.log(data)
//   const [username,setUsername]=useState('')
//  if(!data){
//   setUsername('Admin')
//  }
//   else{
// setUsername(data.firstName)
//   }
const [username, setUsername] = useState("Admin")
 useEffect(()=>{
  if(props.data){
    setUsername(props.data.firstName)
  }else{
    setUsername('Admin')
  }
 },[props.data])
const logOutUser=()=>{
localStorage.setItem('loggedInUser','')
// window.location.reload()
props.changeUser('')
// console.log(props.changeUser)

}


  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'> Hello!  <br /> <span className='text-3xl font-semibold'>{username}👋 </span></h1>
      <button onClick={logOutUser} style={{ backgroundColor: 'red' }} className='text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
      </div>
  )
}

export default Header