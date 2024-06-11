import React from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';

const MyContext = React.createContext();
function App() {
const sharedData = 'this is shared data';
console.log(sharedData)

  return (
    
      <MyContext.Provider value= {sharedData}>
    <ChildComponent />
      </MyContext.Provider>
    
  )
}

export default App
