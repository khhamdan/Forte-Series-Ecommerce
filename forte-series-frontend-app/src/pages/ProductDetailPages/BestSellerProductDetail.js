import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import BestSellerProductListDB from '../../data/BestSellersProductData';
import { useDispatch } from 'react-redux';
import { cartData } from '../../redux/action';
// import AsNavFor from '../../components/productDetailComponents/AsNavFor';
const BestSellerProductDetail = () => {
  let { id } = useParams();

  let fData = BestSellerProductListDB.find((x) => x.id == id);
  const dispatch = useDispatch();
  console.log(fData);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={fData.image} alt="" className="productDetailImage" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 productDetailinfo">
            <div className="productDetailName">{fData.pName}</div>
            <div className="productDetailStars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span>27 Reviews</span>
            </div>
            <div className="productDetailPrice">${fData.price}</div>
            <button
              className="cartButton"
              onClick={() => dispatch(cartData(fData))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellerProductDetail;
