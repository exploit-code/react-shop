import React, { useState } from "react";
import './Product.scss'
import Button from '../../components/Button/Button'
import BuyTogether from '../../components/BuyTogether/BuyTogether'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import plusIcon from "./img/icon-plus.png";
import minusIcon from "./img/icon-minus.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


export const ProductPage = () => {
  const dispatch = useDispatch()
  let [quantity, setQuantity] = useState(1);

  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(quantity)
  return (
    <div className='product'>
      <div className='product__content'>
        <a className='product__content__link' href='/catalog'>
          Back to catalog
        </a>
        <div className='alignLeft'>
          <div className='alignCenter'>
            <div className='product__content__heading'>{data?.attributes?.title}</div>
            <div className='product__content__shortLine'></div>
          </div>
          <div className='price_text'>${(Number(data?.attributes?.price)).toFixed(2)}</div>
        </div>

        <div className='product__content__box'>
          <div className='product__content__boxleft'>
            {/* <a href='#'> */}
            <img
              className='product__content__img'
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
            />
            {/* </a> */}
            {/* <Button text='ADD TO CART'
            /> */}

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
                      text={quantity > 1 ? 'GO TO CART' : 'ADD TO CART'}

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
                <button onClick={() => setQuantity((prev) =>  prev + 1)} type="button"
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
