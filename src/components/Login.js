import React, { useState } from 'react'

import { useNavigate} from "react-router-dom";

    




function Login(props) {
    
    const navigate = useNavigate();
   
const[values, setValues]= useState({
    username:'',
    password:'',
    birthdate: ''
})    
const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@$]).{8,}$/
const [usererrors, setUsererrors] = useState(false);
const [passerrors, setPassErrors] = useState(false);
const [birthError, setBirthError] = useState(false);
const [gender, setGender] = useState()



const handleInput = (e) => {
    setValues(prev =>({...prev, [e.target.name]: [e.target.value]}))
    if (values.username==="" ) {
        setUsererrors(true);
  }
  else{ 
      setUsererrors(false);
  } 
  if(values.password==="") {
    setPassErrors(true);
}
else {
    setPassErrors(false);
}
if(values.birthdate==="") {
    setBirthError(true);
}
else{
    setBirthError(false);
}
if(!password_pattern.test(values.password)) {
    setPassErrors(true);
}

else {
setPassErrors(false);

}

}

const handleSelect = (e) => {
    setGender(e.target.value);
}



/*function handleValidation(e) {
    e.preventDefault();
    
   <Router>
    <switch>
        <Route path="/view" Component={View} />
    </switch>
   </Router>
};
*/
function reset () {
    setValues("");
}

const Click = () => {
    if(values.username.length===0|| values.password.length===0 || values.birthdate.length===0 ) {
        alert("please fill all the fields")
    } else {
    navigate("/view", {state: {values, gender}});
    }
}

    
    return (
        <div>
            <h1>Login</h1>
           <form >
           <input type="text" placeholder="Enter Username" name="username" value={values.username} onChange={handleInput} />
           {usererrors?<span>"invalid username</span>:""}
          
            <br /> <br />
            <input type="password" placeholder="Enter Password" name="password" value={values.password} onChange={handleInput}/>
             {passerrors?<span>"invalid password"</span>:""}
            
            <textarea id="birth" rows="4" cols="20" name="birthdate" value={values.birthdate}onChange={handleInput}>Enter your birthdate here</textarea>
              {birthError?<span>"please fill this field"</span>:""}
               
            <br /> <br />
            <select id="gender"onChange={handleSelect} required>
                <option value="">Please select one</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
            </select>
            
            <button onClick={Click}>submit</button>
         
            <button onClick={reset} >Cancel</button>
            
            
           </form>
        </div>
    )
}

export default Login;
