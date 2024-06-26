import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch();

  const [newAirline, setNewAirline] = useState('');

  const handleAirlineSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_AIRLINE', payload: newAirline });
    setNewAirline('');
  }

  const airlineArray = useSelector(store => store.airlineArray);
  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={(e) => handleAirlineSubmit(e)}>
        <input placeholder='Airline Name' value={newAirline} onChange={(event) => setNewAirline(event.target.value)} />
        <button type="submit">Add Airline</button>
      </form>


      <h2>Airlines</h2>
      <ul>
        {airlineArray.map((airline, index) => { return (
          <li key={index}>{airline}</li>
        )})}
      </ul>
    </div>
      )}

export default App;
