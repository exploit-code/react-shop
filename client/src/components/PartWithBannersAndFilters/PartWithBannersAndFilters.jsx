import '../../normalize.css';
import './PartWithBannersAndFilters.scss';
import './media_PartWithBannersAndFilters.scss';

import banner_1 from './img/banner_1.png';
import banner_2 from './img/banner_2.png';
import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";


const PartWithBannersAndFilters = () => {
  const dispatch = useDispatch()
  const { data } = useFetch(`/products?populate=*`);
  let quantity = 1

  return (
    <>
      <div className="containerPartWithBannersAndFilters">
        <div className="bannerBlock">
          <div className="bannerBlock__item">
            <img className='bannerBlock__item_img' src={banner_1} alt="banner 1" />
            <h2 className='bannerBlock__item_titleLeft'>summer fruits</h2>
            <p className="bannerBlock__item_textLeft">100% all natural fruit juice</p>
            <button className="bannerBlock__item_btnLeft">SHOP NOW</button>
          </div>
          <div className="bannerBlock__item">
            <img className='bannerBlock__item_img' src={banner_2} alt="banner 2" />
            <h2 className='bannerBlock__item_titleRight'>Dried & Drink <br /> Fruits</h2>
            <p className="bannerBlock__item_textRight">100% all natural fruit juice</p>
            <button className="bannerBlock__item_btnRight">SHOP NOW</button>
          </div>
        </div>

        <div className="filterBlock">
          <div className="filterBlock__latestProducts">
            <div className="filterBlock__latestProducts_titleBlock">
              <div className="filterBlock__latestProducts_titleBlock_title">Latest products</div>
              <img className="filterBlock__latestProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__latestProducts_titleBlock_arrowRight" src={arrowRight}
                alt="arrow right"></img>
            </div>
            {data?.slice(1, 4).map((item, idx) => (
              <div key={idx} className="filterBlock__latestProducts_item">
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

          <div className="filterBlock__topProducts">
            <div className="filterBlock__topProducts_titleBlock">
              <div className="filterBlock__topProducts_titleBlock_title">Top products</div>
              <img className="filterBlock__topProducts_titleBlock_arrowLeft" src={arrowLeft}
                alt="arrow left"></img>
              <img className="filterBlock__saleProducts_titleBlock_arrowRight" src={arrowRight}
                alt="arrow right"></img>
            </div>
            {data?.slice(4, 7).map((item, idx) => (
              <div key={idx} className="filterBlock__latestProducts_item">
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
                      addToCart(
                        {
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

          <div className="filterBlock__saleProducts">
            <div className="filterBlock__saleProducts_titleBlock">
              <div className="filterBlock__saleProducts_titleBlock_title">Sale products</div>
              <img className="filterBlock__saleProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
              <img className="filterBlock__saleProducts_titleBlock_arrowRight" src={arrowRight}
                alt="arrow right"></img>
            </div>
            {data?.slice(7, 10).map((item, idx) => (
              <div key={idx} className="filterBlock__latestProducts_item">
                <Link to={`/productpage/${item.id}`} className="filterBlock__latestProducts_item_left">
                  <div className="overlay">
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
                      addToCart(
                        {
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

export default PartWithBannersAndFilters
