import React, { useState, useEffect } from 'react'
import './userList.css'
function UserList() {
  const [users,setUsers] = useState([])
  const axios = require('axios')
  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setUsers(response.data);
        console.log(response.data)
 })
    .catch(error => {
        console.log(error);
 })
},[])
    return (
        <div className="userList">
            {users.map((user,i)=><li className="float" key={i}>{user.name}</li>)}
        </div>
    )
}
export default UserList