import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({ productInfo }) => {
  return (
    <>
      <div className="col-4">
        <h2 className="bg-dark p-2 text-light">{productInfo.category}</h2>
        <div
          className="img-cover img-thumbnail"
          style={{ background: 'url(' + productInfo.image + ')' }}
        ></div>
        <div className="bg-info text-light p-2 px-2 d-flex justify-content-between align-items-center">
          <span>Price:</span> <span>{productInfo.price}</span>
          {'  '}
        </div>
        <div className="p-2" style={{ height: '70px' }}>
          <h4>{productInfo.title.substr(0, 50)}</h4>
        </div>
        <div className="p-2" style={{ height: '150px' }}>
          <p>{productInfo.description.substr(0, 150)}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center p-2">
          <div>
            {' '}
            <Link to={`/products/${productInfo.id}`} className="btn btn-info">
              <i className="fas fa-shopping-cart"></i>Purchase
            </Link>
          </div>
          {/* <div> <Link to={`/products/${productInfo.id}`} className="btn btn-outline-info"><i className="fas fa-eye"></i>Preview</Link></div> */}
          <h2>Chabges</h2>
        </div>
      </div>
    </>
  );
};

export default Cards;
