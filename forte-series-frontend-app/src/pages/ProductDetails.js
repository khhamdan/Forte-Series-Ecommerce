import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const params = useParams();
  const [items, setItem] = useState([]);
  // let navigate = useNavigate();

  // const getItem = async () => {
  //     fetch(`https://fakestoreapi.com/products/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setItem(data));
  // };

  const getItem = () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setItem(res.data));
  };

  useEffect(() => {
    getItem();
  });

  // let navigate = useNavigate();

  // let fData = item.find(x=> x.id == id);
  // handleTab = (index) => {
  //   alert(index);
  // };

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={items.image} alt=""></img>
        </div>
      </div>
      <div className="box">
        <div className="row">
          <h2>{items.category}</h2>
        </div>
        <div className="colors"></div>
        <button style={{ background: 'red' }}></button>
        <button style={{ background: 'blue' }}></button>
        <button style={{ background: 'white' }}></button>
        <button style={{ background: 'black' }}></button>
      </div>
      <p>{items.description}</p>
      <p>{items.content}</p>

      <div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
    // {/* <div>

    // <a className='btn btn-warning my-4' onClick={()=>navigate('/product')}>Back to Home</a>

    //   <h1>Product Detail Page</h1>
    //   <h1>Id : {items.id}</h1>
    //   <h1>Name : {items.category}</h1>
    //   <h1>Price : {items.description}</h1>
    // </div> */}
  );
};

export default ProductDetails;
