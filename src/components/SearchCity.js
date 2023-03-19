import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchCity() {
    const [selectedCity, setSelectedCity] = useState();
    const cityList = [
        {
            value: "a",
            label: "Pune"
        },
        {
            value: "b",
            label: "Mumbai"
        },
        {
            value: "c",
            label: "Bhopal"
        },
        {
            value: "d",
            label: "Indore"
        },
        {
            value: "e",
            label: "Ahmedabad"
        },
        {
            value: "f",
            label: "Surat"
        },
        {
            value: "g",
            label: "Bhopal"
        },
        {
            value: "h",
            label: "Guwahati"
        },
        {
            value: "i",
            label: "Tezpur"
        },
        {
            value: "j",
            label: "Cochin"
        },
        {
            value: "k",
            label: "Thiruvananthapuram"
        },
        {
            value: "l",
            label: "Bangalore"
        },
        {
            value: "m",
            label: "Mangalore"
        },
        {
            value: "n",
            label: "Chennai"
        }, {
            value: "o",
            label: "Amritsar"
        },
        {
            value: "p",
            label: "Chandigarh"
        }, {
            value: "q",
            label: "Gurgaon"
        }, {
            value: "r",
            label: "Faridabad"
        }, {
            value: "s",
            label: "Lucknow"
        },
        {
            value: "t",
            label: "Kanpur"
        }, {
            value: "u",
            label: "Delhi"
        }

    ];

    function handleCity(data) {
        setSelectedCity(data);
    }
  return (
    <div>
        <Select
    options={cityList} placeholder="SELECT city" onChange={handleCity} isSearchable={true} />
    </div>
  )
}
