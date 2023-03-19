import React, {useState} from 'react'
import Select from 'react-select'
import View from './View';
export default function Search() {

    const[selectedOptions, setSelectedOptions] = useState();
    const optionList = 
         [
            {   value: "Maharashtra",
                label: "Maharashtra"
               
        
            },
            {   value: "Madhya Pradesh",
                label: "Madhya Pradesh"
               
            },
            {   value: "Gujarat",
                label: "Gujarat"
               
            },
            {
                value: "Assam",
                label: "Assam"
               
        
            },
            {   value: "Kerala",
                label: "Kerala"
               
            },
            {    value:  "Karnataka",
                label: "Karnataka"
               
            },
            {    value: "TamilNadu",
                label: "TamilNadu"
               
            },
            {   value:"Punjab",
                label: "Punjab"
               
            },
            {    value: "Haryana",
                label: "Haryana"
               
            },
            {    value:"up",
                label: "Uttar Pradesh"
               
            }, {
                value: "del",
                label: "Delhi"
            }
            
            
        ];

        function handle(data) {
            setSelectedOptions(data);
        }
    
  return (
    <div>
    <h2>Select</h2>
    <Select
    options={optionList} placeholder="SELECT STATE" onChange={handle} isSearchable={true} />
   
    </div>
  )
}
