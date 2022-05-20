import axios from "axios";
import React from "react";
import { useState } from "react";



function App() {


  const [selection, setSelection] = useState({});

  const selector = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setSelection(values => ({...values, [name]: value}));

  }

  const apiPost = (event) => {
    event.preventDefault();
    console.log(selection);

    axios.post('http://localhost:8888/api_assessment/petExport', selection)
    .then(function(response){
      console.log(response);
    });

  }






  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="pet_name" type="text" placeholder="Name of Pet" onChange={selector}/>
            <select  name="pet_species" type="text" onChange={selector}>
              <option selected disabled hidden>Species of Pet</option>
              <option>Canine</option>
              <option>Feline</option>
              <option>Equine</option>
              <option>Rodent</option>
              <option>Avian</option>
              <option>Reptile</option>
            </select>
            <select name="pet_sex" type="text" onChange={selector}>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="pet_age" type="number" placeholder="Age of Pet (years) " onChange={selector}/>
            <input name="pet_chipID" type="number" placeholder="Pet MicroChip Id" onChange={selector}/>
            <input name="owner_name" type="text" placeholder="Pet Owner Name" onChange={selector}/>
            <input name="owner_ID" type="number" placeholder="Pet Owner ID Number" onChange={selector}/>
            <input name="origin" type="text" placeholder="Export Origin" onChange={selector}/>
            <input name="destination" type="text" placeholder="Export Destination" onChange={selector}/>

            <button onClick={apiPost}>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
