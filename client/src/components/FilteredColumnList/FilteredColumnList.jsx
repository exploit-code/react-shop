import '../../normalize.css';
import './FilteredColumnList.scss';

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";


const FilteredColumnList = ({ type ,firstIdx, secondIdx }) => {
  const dispatch = useDispatch()
  const { data,loading,error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
  );
  let quantity = 1

  return (
    <>
            {error
                ? "Something went wrong!"
                : loading
                    ? "loading"
                    : data?.slice(firstIdx,secondIdx).map((item) => (
              <div key={item.id} className="filterBlock__latestProducts_item ">
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
    </>
  )
}

export default FilteredColumnList
