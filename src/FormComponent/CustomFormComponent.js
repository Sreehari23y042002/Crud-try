import React, { useEffect, useState } from 'react'

const CustomFormComponent = () => {
    let b=[];

    const [formData, setFormData]= useState({
        name:'',
        num:''
    })
    const handleChange=(event)=>{
        const {name,value}= event.target
        setFormData({...formData,[name]:value})
    }
    
    const [storedData, setStoredData]= useState([])
    const handleSubmit=()=>{
        b.push(formData)
        setStoredData(...formData)
    }

useEffect(()=>{
console.log(b,'as');

},[formData])
  return (
    <div>
         <input type='text' name='name' value={formData.name} onChange={handleChange}/>
        <input type='number' name='num' value={formData.num} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    <div>
        {storedData.map(data=>(
            <>
            {data.name}
            {data.num}
            </>
        ))}
    </div>
    </div>
  )
}

export default CustomFormComponent
  