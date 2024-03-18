import React from 'react';
import './Dashboard.css';

import { Link } from 'react-router-dom'; 

import { IoIosHome } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";



function Dashboard() {



  const employeeData = [
    { day: 'Productivity on Monday', productivity: 4 },
    { day: 'Productivity on Tuesday', productivity: 92 },
    { day: 'Productivity on Wednesday', productivity: 122 },
    { day: 'Productivity on Thursday', productivity: 93 },
    { day: 'Productivity on Friday', productivity: 89 },
    { day: 'Productivity on Saturday', productivity: 98 },
  ];

  const chartData = {
    labels: employeeData.map((data) => data.day),
    datasets: [
      {
        label: 'Productivity',
        data: employeeData.map((data) => data.productivity),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
  <div className="upper_cont">
    <div className='container'>

    <img  className="top-right" src="C:\Users\uttam\Desktop\login\src\Images\logo2.png"/>
    <img className='center-right' src="C:\Users\uttam\Desktop\login\src\Images\logo3.png"/>
   
   


    <div className="dashboard-container">
     
      <div className="heading_second">Employee Productivity Dashboard</div>
      {/* <div className="chart-container">
        {/* Chart component goes here */}
      {/* </div>  */}
      <div className="data-table">
        <table>
          <tbody>
            {employeeData.map((data) => (
              <div key={data.day} className="employee-info">
                <div className="basics">
              <span className="data-heading">{data.day}</span>
              <span className="bar-label">{data.productivity}%</span>
              </div>
              <div className="bar" style={{ width: `${data.productivity}%` }} />
            </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>
    {/* footer */}
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






export default Dashboard;