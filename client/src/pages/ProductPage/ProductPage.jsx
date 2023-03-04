import React, { useState, useContext } from "react";
import './Product.scss'
import Button from '../../components/Button/Button'
import BuyTogether from '../../components/BuyTogether/BuyTogether'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import plusIcon from "./img/icon-plus.png";
import minusIcon from "./img/icon-minus.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { addToFavorites } from "../../redux/favoritesReducer";
import Favorite from "../../components/Favorite/Favorite";
import { AuthContext } from "../../context/UserContext";


export const ProductPage = () => {
  const { user } = useContext(AuthContext);
  const favoritesItems = useSelector((state) => state.favorites.products)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const favoriteObj = {
    id: data?.id,
    title: data?.attributes?.title,
    desc: data?.attributes?.desc,
    price: data?.attributes?.price,
    img: data?.attributes?.img?.data?.attributes?.url,
    totalPriceItem: data?.attributes?.price,
    category: data?.attributes?.categories?.data[0]?.attributes?.title,
    isFavorite: true,
    quantity: 1,
  }

  const isFavorite = favoritesItems.reduce((res, obj) => {
    if(obj.id === Number(id)) {
      return obj['isFavorite']; // возвращаем только одно значение
    } else {
      return res;
    }
  }, false);

  // console.log('favoritesItems', favoritesItems)
  // console.log('category', data?.attributes?.categories?.data[0]?.attributes?.title)

  return (
    <div className='product'>
      <div className='product__content'>
        <a className='product__content__link' href='/catalog'>
          Back to catalog
        </a>
        <div className='product__content__title'>
          <div className='alignLeft'>
            <div className='alignCenter'>
              <div className='product__content__heading'>{data?.attributes?.title}</div>
              <div className='product__content__shortLine'></div>
            </div>
            <div className='price_text'>${(Number(data?.attributes?.price)).toFixed(2)}</div>
          </div>
          {addToFavorites && (
            <div className={!user?.email ? 'product__content__boxfavorite disabled' :'product__content__boxfavorite'} onClick={() =>
              dispatch(addToFavorites(favoriteObj))}>
              <Favorite isFavorite={isFavorite}/>
             </div>
          )}
        </div>

        <div className='product__content__box'>
          <div className='product__content__boxleft'>
            <img
              className='product__content__img'
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
            />

            <div className="count_block">
              <Button onClick={() =>
                dispatch(
                  addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      totalPriceItem: (data.attributes.price * quantity).toFixed(2),
                      quantity,
                    }
                  )
                )
              }
                      text='ADD TO CART'

              />
              <div className="count__box">
                {quantity}
                {/* <input type="number" className="count__input" min="1" max="100" value="1" /> */}
              </div>
              <div className="count__controls">
                <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} type="button"
                        className="count_up">
                  <img className="count_up_img" src={minusIcon} alt="Increase"/>
                </button>
                <button onClick={() => setQuantity((prev) => prev + 1)} type="button"
                        className="count_down">
                  <img className="count_down_img" src={plusIcon} alt="Decrease"/>
                </button>
              </div>
            </div>
          </div>

          <div className='product__content__boxright'>
            <div className='product__content__text'>
              {data?.attributes?.desc}
            </div>
          </div>
        </div>
        {/* нижний блок Покупают вместе - отдельный компонент */}
        <BuyTogether />
      </div>
    </div>
  )
}

export default ProductPage
