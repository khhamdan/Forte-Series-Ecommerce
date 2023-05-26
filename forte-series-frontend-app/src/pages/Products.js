import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';

const Products = () => {
  const [item, setItem] = useState([]);

  const getItem = async () => {
    const url = 'https://fakestoreapi.com/products';
    const items = await fetch(url);
    const itemApi = await items.json();
    setItem(itemApi);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {item.map((copies_Of_Items) => (
            <Cards productInfo={copies_Of_Items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
