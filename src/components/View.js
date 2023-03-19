import React from 'react'
import { useLocation } from 'react-router-dom';


 function View(props) {
    const location = useLocation();
    console.log(location.state)
  return (
    <>
    <div>   <h1>
        view here</h1></div>
        <label> username is :{location.state.values.username} </label>  
        <br></br>
        <label> birthdate is :{location.state.values.birthdate} </label>  
        <br></br>
        <label>gender is: {location.state.gender}</label>
        <br></br>
       

</>     
  )
}

export default View;