import React from "react";
import User from './components/Login';
import { Routes, Route} from "react-router-dom";
import View from "./components/View";
import Login from "./components/Login";
import Search from "./components/Search";
import SearchCity from "./components/SearchCity";


function App() {
  return (
    <>
    <div className="App">
     
     
     
   
    <Routes>
    <Route path='/' element ={<Login />} />
    <Route path= '/view' element ={<View />} />
    </Routes>
    <Search />
    <SearchCity />
    </div>
    
</>

  );
}

export default App;
