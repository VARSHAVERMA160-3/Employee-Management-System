import React, { useContext, useEffect, useState } from 'react';
import Login from "./components/Auth/Login1";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
 


const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData , setLoggedInUserData] =useState(null)
  const [userData,setUserData] = useContext(AuthContext);

useEffect(() => {
  const loggedInUser=localStorage.getItem('loggedInUser')
// console.log(loggedInUser);
if(loggedInUser){
  const userData=JSON.parse(loggedInUser)
  // console.log(userData);
  setUser(userData.role)
  setLoggedInUserData(userData.data)
}

},[])


  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       const parsedUser = JSON.parse(loggedInUser);
  //       // setUser(parsedUser.role);
  //     }
      
  //   }
  // }, [authData]);

   const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
    
     else if (userData ){
      const employee = userData.find((e) => email == e.email && e.password == password)
       if(employee)
     {
      // console.log(authData.employees)
      setUser('employee');
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' ,data:employee}))
    }
   }
    else {
      alert("Invalid Credentials");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} />:( user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      </>
  );
};

export default App;
