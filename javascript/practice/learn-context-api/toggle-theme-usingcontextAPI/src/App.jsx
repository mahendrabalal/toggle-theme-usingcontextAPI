import React, { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Child from './Component/Child';
import './App.css'


const myContext = createContext(); 

function App() {
  const [value, setValue] = useState('Initial Value')

  return (
 <myContext.Provider value= {{value, setValue}}>
  <div>
    <h1>This is context API practice</h1>
    <Child />
  </div>
 </myContext.Provider>

  )
}

export default App;
