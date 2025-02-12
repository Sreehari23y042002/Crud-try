import React, { useContext } from 'react'
import { NameContext } from './Context';

const GetContext = () => {
    const {name,setName} = useContext(NameContext);
    console.log(name,'name');
    
  return (
    <div>
      <p>cdcdcd</p>
    </div>
  )
}

export default GetContext
