import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { DLT } from '../../src/redux/action';

const Cart = () => {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispath = useDispatch();

  const dlt = (id) => {
    dispath(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar />
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div className="col-xl-9 col-md-8">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-light">
              <span>Products</span>
              <a className="font-size-sm" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                  style={{ width: '1rem', height: '1rem' }}
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Continue shopping
              </a>
            </h2>

            {/* Item*/}
            {getdata.length ? (
              getdata.map((e) => {
                return (
                  <>
                    <div
                      className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
                      key={e.id}
                    >
                      <div className="media d-block d-sm-flex text-center text-sm-left">
                        <a className="cart-item-thumb mx-auto mr-sm-4" href="#">
                          <img
                            src={e.image}
                            alt="Product"
                            className="cartproductDetailImage"
                          />
                        </a>
                        <div className="media-body pt-3 m-2">
                          <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                            {e.pName}
                          </h3>
                          {/* <div className="font-size-sm">
                          <span className="text-muted mr-2">Size:</span>XL
                        </div>
                        <div className="font-size-sm">
                          <span className="text-muted mr-2">Color:</span>Gray
                        </div> */}
                          <div className="font-size-lg text-primary pt-2">
                            ${e.price}
                          </div>
                        </div>
                      </div>
                      <div
                        className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                        style={{ maxWidth: '10rem' }}
                      >
                        <div className="form-group mb-2">
                          <label htmlFor="quantity2">Quantity</label>
                          <div className="input-group bootstrap-touchspin">
                            <span className="input-group-btn">
                              <button
                                className="btn btn-default bootstrap-touchspin-down"
                                type="button"
                              >
                                -
                              </button>
                            </span>
                            <span
                              className="input-group-addon bootstrap-touchspin-prefix"
                              style={{ display: 'none' }}
                            />
                            <input
                              type="text"
                              name="quantity"
                              value={e.qnty}
                              defaultValue={0}
                              className="input-qty form-control text-center"
                              style={{ display: 'block' }}
                            />
                            <span
                              className="input-group-addon bootstrap-touchspin-postfix"
                              style={{ display: 'none' }}
                            />
                            <span className="input-group-btn">
                              <button
                                className="btn btn-default bootstrap-touchspin-up"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>

                        <button
                          className="btn btn-outline-danger btn-sm btn-block mb-2"
                          type="button"
                          onClick={() => dlt(e.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2 mr-1"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <h1>No item is addded</h1>
            )}

            {/* Item*/}
          </div>
          {/* Sidebar*/}
          <div className="col-xl-3 col-md-4 pt-3 pt-md-0">
            <h2 className="h6 px-4 py-3 bg-light text-center">Subtotal</h2>
            <div className="h3 font-weight-semibold text-center py-3">
              ${price}
            </div>
            <hr />
            <a className="btn btn-light btn-block" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-credit-card mr-2"
              >
                <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                <line x1={1} y1={10} x2={23} y2={10} />
              </svg>
              Proceed to Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
