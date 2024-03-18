import React, { useEffect, useState } from 'react';
import './Employee.css';
import { Link } from 'react-router-dom'; 

import { IoIosHome } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";

function UserList() {
  const [userList, setUserList] = useState([]); // List of users (replace with your data source)
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  useEffect(() => {
    // Simulate API call to fetch user data (replace with your actual API call)
    setUserList([
      { name: 'Arjun', id: 1 , DOB: '16-11-2000', Role:'Software Engineer'},
      { name: 'Jane Smith', id: 2, DOB: '15-01-2000', Role:'Soft Engineer' },
      // ... other users
    ]);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="hamara-conatiner">
    <div className="user-list-container">

    <img  className="top-right" src="C:\Users\uttam\Desktop\login\src\Images\logo2.png"/>
    <img className='center-right' src="C:\Users\uttam\Desktop\login\src\Images\logo3.png"/>
    
      <input
        
        type="text"
        placeholder="Search Users"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <div className="cards">
            <div > EMP ID : {user.id}</div>
            <div > Name : {user.name}</div>
            <div > DOB : {user.DOB}</div>
            <div > Role : {user.Role}</div>
          

          </div>
        ))}
      </ul>
    </div>

    


    <div className='footer'>

<Link to="/employee-productivity-dashboard" className="home">
    <IoIosHome />
  </Link>
  <Link to="/employee-list" className="people">
    <IoPeopleSharp />
  </Link>



</div>
    
    </div>
    
  );
}

export default UserList;