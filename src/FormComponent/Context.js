import React, { createContext, useState } from 'react'
import GetContext from './GetContext';
export const NameContext= createContext();
const Context = () => {
    
    const [name, setName]= useState('Hi')
  return (
    <div>
      <NameContext.Provider value={{name, setName}}>
        <GetContext/>
      </NameContext.Provider>
    </div>
  )
}

export default Context
