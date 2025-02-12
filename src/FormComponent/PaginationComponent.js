import React,{useEffect, useState} from 'react';
import axios from 'axios'

const PaginationComponent=()=>{
    const [productData, setProductData]= useState()
    const fetchProductData= async()=>{
        // const response= await fetch('https://fakestoreapi.com/products')
        // .then((res)=>res.json())
        // setProductData(response)
        await axios.get('https://fakestoreapi.com/products')
        .then(res=> setProductData(res.data))
    }
    useEffect(()=>{
        fetchProductData()
    },[])
const [currentPage, setCurrentPage]=useState(1);
const [itemPerPage, setItemPerPage]= useState(10);
const [searchData, setSearchData]= useState('');
const lastIndex= currentPage * itemPerPage;
const firstIndex= lastIndex - itemPerPage;
const getData= productData?.filter(data=>data?.title.toLowerCase().includes(searchData?.toLowerCase()))
console.log(getData,'getdata');

const totalPage = getData?.slice(firstIndex, lastIndex);
console.log(totalPage, 'total');
const sliceData= Math.ceil(getData ?.length/itemPerPage);
console.log(sliceData, 'setSlice');

const handleCount=()=>{
    setCurrentPage(currentPage+1)
}
const handleCountSub=()=>{
    setCurrentPage(currentPage-1)
}
    return(
<div>
    <input type='text' name='searchData' value={searchData} onChange={(e)=> setSearchData(e.target.value)}/>
{totalPage?.map((data,index)=>(
    <div key={index}>{data?.title}</div>
))}

<button onClick={handleCount} disabled={currentPage===sliceData}>Next</button>
{currentPage}
<button onClick={handleCountSub} disabled={currentPage===1}>Prev</button>

</div>
    )
}
export default PaginationComponent