import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import ConetextCheck from "./ConetextCheck";
export const MyCreateContext= createContext();

const LastTry = () => {
  const [formData, setFormData] = useState({
    name: "",
    nuw: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [storedData, setStoredData] = useState([]);
//   const updatedData = {
//     ...formData,
//     name: formData + "a",
//   };
  const handleSubmit = () => {
    setStoredData((prev) => [...prev, formData]);
  };

  const [productData, setProductData] = useState([]);
  const fetchData = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const datas= productData?.filter(data=>data?.title?.toLowerCase().includes(searchValue?.toLowerCase()))
  const totalPage = datas?.slice(firstIndex, lastIndex);
  const sliceData = Math.ceil(datas?.length / itemPerPage);

  const handleCount = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const [products, setProducts] = useState();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchDatas = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const handleEdit = (id) => {
    const newData = products?.find((data) => data?.id === id);
    setProduct(newData);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setProducts(products?.filter((data) => data?.id !== id)));
  };

  const handleProductSubmit = async () => {
    if (product?.id) {
      await axios
        .put(`https://fakestoreapi.com/products/${product?.id}`, product)
        .then((res) =>
          setProducts(
            products?.map((data) => (data.id === product?.id ? res.data : data))
          )
        );
        setProduct({title:'',image:'',description:'',category:'',price:''})

    } else {
      axios
        .post("https://fakestoreapi.com/products", product)
        .then((res) => setProducts((prev) => [...prev, product]));
        setProduct({title:'',image:'',description:'',category:'',price:''})

    }
  };

  const [name, setName]=useState('Hi')

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData?.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="nuw"
        value={formData?.nuw}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {storedData.map((data) => (
        <div>{data?.name}</div>
      ))}

      <input
        type="text"
        name="searchValue"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {totalPage?.map((data) => (
        <div>{data?.title}</div>
      ))}
      <button onClick={handleCount} disabled={currentPage === sliceData}>
        Next
      </button>
      {currentPage}
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>

      <div>
        <input
          type="text"
          name="title"
          value={product?.title}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="price"
          value={product?.price}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="description"
          value={product?.description}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="category"
          value={product?.category}
          onChange={handleProductChange}
        />
        <input
          type="text"
          name="image"
          value={product?.image}
          onChange={handleProductChange}
        />
        <button onClick={handleProductSubmit}>
          {product?.id ? "Update" : "Create"}
        </button>

        {products?.map((data) => (
          <div key={data?.id}>
            <div>{data?.title}</div>
            <div>{data?.description}</div>
            <div>{data?.price}</div>
            <button onClick={() => handleEdit(data?.id)}>Edit</button>
            <button onClick={() => handleDelete(data?.id)}>Delete</button>
          </div>
        ))}
      </div>

      <MyCreateContext.Provider value={{name, setName}}>
        <ConetextCheck/>
      </MyCreateContext.Provider>
    </div>
  );
};

export default LastTry;
