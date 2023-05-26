import React from 'react';
import BestSellerProductListDB from '../../data/BestSellersProductData';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartData } from '../../redux/action';
const BestSellersSection = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="BestSellersSection">
        <div className="ingredients">
          <div className="natural_based_ingredients">
            <div className="centerImage">
              <img src="./images/naturalBI.webp" alt="" />
            </div>
            <div className="textBox">
              <h2>
                <span className="textOfIngredients">
                  NATURAL BASED INGREDIENT
                </span>
              </h2>
            </div>
          </div>
          <div className="Easy_Restyle_Washout">
            <div className="centerImage">
              <img src="./images/EasyRW.webp" alt="" />
            </div>
            <div className="textBox">
              <h2>
                <span className="textOfIngredients">
                  EASY TO RESTYLE & WASHOUT
                </span>
              </h2>
            </div>
          </div>
          <div className="natural_based_ingredients">
            <div className="centerImage">
              <img src="./images/formulated.webp" alt="" />
            </div>
            <div className="textBox">
              <h2>
                <span className="textOfIngredients">FORMULATED IN THE USA</span>
              </h2>
            </div>
          </div>
        </div>
        {/* text */}
        <div className="best_sellers_text">
          <div className="best_sellers_text_heading">
            <h2>SHOP FORTE BEST SELLERS</h2>
          </div>
          <div className="best_sellers_text_para">
            <div>
              It's time to ditch the cheap, toxic, greasy drugstore products.
            </div>
            <div>
              It's 2023. You deserve amazing hair, gain confidence with your own
              first-class grooming routine.
            </div>
          </div>
        </div>
        {/* Best Sellers Products */}
        <div className="best_sellers_products">
          {/* product 1 */}
          {BestSellerProductListDB.map((bsproduct) => {
            let indexOfBreaker = bsproduct.pName.search('\\|');
            let stringBeforeBreaker = bsproduct.pName.slice(
              0,
              indexOfBreaker + 1
            );
            let stringAfterBreaker = bsproduct.pName.slice(indexOfBreaker + 1);
            return (
              <div className="productOfBestSellers" key={bsproduct.id}>
                <div>
                  <Link
                    to={`/bestSellersProductDetail/${bsproduct.id}`}
                    // target="_blank"
                    // rel="noreferrer"
                  >
                    <img
                      src={bsproduct.image}
                      className="bestSellersProductImage"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="bestSellersStars">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="bestSellersproductName">
                  <div>{stringBeforeBreaker}</div>
                  <div> {stringAfterBreaker}</div>
                </div>
                <div>${bsproduct.price}</div>
                <div>
                  <button
                    className="cartButton"
                    onClick={() => dispatch(cartData(bsproduct))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BestSellersSection;
