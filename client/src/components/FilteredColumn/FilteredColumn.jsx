import '../../normalize.css';
import './FilteredColumn.scss';
import './media_FilteredColumn.scss';

import banner_1 from './img/banner_1.png';
import banner_2 from './img/banner_2.png';
import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";


const FilteredColumn = ({ type }) => {
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
  );
  let quantity = 1

  return (
    <>
      <div className="containerPartWithBannersAndFilters">
        <div className="filterBlock">
          <div className="filterBlock__latestProducts">
            <div className="filterBlock__latestProducts_titleBlock">
              <div className="filterBlock__latestProducts_titleBlock_title">{type} products</div>
              <img className="filterBlock__latestProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__latestProducts_titleBlock_arrowRight" src={arrowRight}
                   alt="arrow right"></img>
            </div>
            {data?.map((item) => (
              <div key={item.id} className="filterBlock__latestProducts_item">
                <Link to={`/productpage/${item.id}`} className="filterBlock__latestProducts_item_left">
                  <div className='overlay'>
                    <img className="filterBlock__latestProducts_item_left_img"
                      src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                      alt={item.attributes.title} />
                  </div>
                </Link>
                <div className="filterBlock__latestProducts_item_right">
                  <div className="filterBlock__latestProducts_item_right_name">{item.attributes.title}</div>
                  <div
                    className="filterBlock__latestProducts_item_right_price">${(item.attributes.price).toFixed(2)}</div>
                  <p onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.attributes.title,
                        desc: item.attributes.desc,
                        price: item.attributes.price,
                        img: item.attributes.img.data.attributes.url,
                        totalPriceItem: (item.attributes.price).toFixed(2),
                        quantity,
                      }
                      )
                    )
                  }>
                    Add to cart
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default FilteredColumn
