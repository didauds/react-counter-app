import React, { useState } from 'react';

import './App.css';

import Header from './components/Header/Header'; 

function App() {

  const snackListInitialValues = [];

  const [snackList, setSnackList] = useState(snackListInitialValues);

  const [newSnackName, setNewSnackName] = useState('');

  const [caloriesValue, setCaloriesValue] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = () => {

    setCaloriesValue(0);

    if(newSnackName === ""){
      alert("Please fill the Name field")
      return;
    }

    setIsSubmitted(true);

    const snackListNewItem = [
      ...snackList,
      {
        itemName: newSnackName,
        calories : caloriesValue 
      }
    ];
    
    setSnackList(snackListNewItem);
    setNewSnackName("");
  }

  const increment = () => {
    setCaloriesValue(caloriesValue + 1)
  }

  const decrement = () => {
    if(caloriesValue > 0) {
      setCaloriesValue(caloriesValue - 1)
    }
  }


  return (
    <div className="app mb-3">
      <Header />
      <div className="container-fluid background-gray">
        <div className="row">
          <div className="container-fluid margin-20">
            <div className="row">
              <div className="col counter text-center font-bold">
                <div>
                  <button className="material-icons font-size-80 arrow-up" onClick={increment}>keyboard_arrow_up</button>
                </div>
                <div>
                  <span className="font-size-80">{caloriesValue}</span>
                </div>
                <div>
                  <button className="material-icons font-size-80 arrow-down" onClick={decrement}>keyboard_arrow_down</button>
                </div>              
              </div>
              <div className="col result-table">
                <div className= {isSubmitted ? "display-hidden" : "text-center font-size-20 font-bold"} >
                  <p>No data available</p>
                </div>
                <table className= {isSubmitted ? "table" : "display-hidden"}>
                  <thead>
                    <tr className="background-black text-white">
                      <th>Dessert (100g serving)</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                      {snackList.map(listItem => {
                        return <tr key={listItem.itemName} className="background-white">            
                                 <td>{listItem.itemName}</td>
                                 <td>{listItem.calories}</td>
                               </tr>
                      })}
                  </tbody>
                </table>
              </div>
            </div>   
            <div className="row margin-top-20">
              <div className="col input-area">
                <input type="text" id="name" className="inline-block font-size-20 margin-20 padding-left-10 name-field" value={newSnackName} onChange={(e) => setNewSnackName(e.target.value)} placeholder="Name" />
                <button className="btn btn-primary inline-block font-size-20 margin-20 button-field" onClick={submit}>PRIMARY</button>
              </div>
              <div className="col">
              </div>
            </div>        
          </div>       
        </div>

      </div>
    </div>
  );
}

export default App;
