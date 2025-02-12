import React,{useState} from 'react';

const CustomComponent=()=>{
const [formData, setFormData]=useState({
    name:'',
    numberDetail:''
})
const [submitData, setSubmitData]= useState([])
const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }))
}
const handleSubmit=()=>{
    console.log('submitted');
    const modifiedFormData = {
        ...formData,
        name: formData.name + 'asn' // Append 'aa' to the name field
    };
    
    setSubmitData((prev)=>([
        ...prev,
        modifiedFormData
    ]))
}
return(
    <>
    <input type='text' name='name' value={formData?.name} onChange={handleChange}/>
    <input type='number' name='numberDetail' value={formData?.numberDetail} onChange={handleChange}/>
    <button onClick={handleSubmit}>Submit</button>
    <div>
        {submitData?.map((data,index)=>(
            <div key={data?.index}>
            <div>{data?.name}</div>
            <div>{data?.numberDetail}</div>
            </div>
        ))}
    </div>
    </>
)
}
export default CustomComponent