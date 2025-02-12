import React, { useState, useEffect } from "react";
import axios from "axios";

const Crud = () => {
  const [products, setProducts] = useState();
  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [product, setProduct] = useState({
    id: null,
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    );
  };
  const handleEdit = (id) => {
    const newOne = products?.find((data) => data?.id === id);
    setProduct(newOne);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setProducts(products?.filter((data) => data.id !== id)));
  };
  const handleSubmit = async () => {
    if (product.id) {
      await axios
        .put(`https://fakestoreapi.com/products/${product?.id}`,product)
        .then((res) =>
          setProducts(products?.map((data) => (data?.id ? res.data : data)))
        );
      setProduct({
        title: "",
        price: "",
        image: "",
        description: "",
        category: "",
      });
    } else {
      await axios.post(`https://fakestoreapi.com/products`, product);
      setProducts((prev) => [...prev, product]);
      setProduct({
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        value={product?.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={product?.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={product?.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        value={product?.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        value={product?.category}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {product?.id ? "Update" : "Create"}
      </button>

      <div>
        {products?.map((data) => (
          <div key={data?.id}>
            <div>{data?.title}</div>
            <div>{data?.price}</div>
            <div>{data?.description}</div>
            <button onClick={() => handleEdit(data?.id)}>Edit</button>
            <button onClick={() => handleDelete(data?.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Crud;
