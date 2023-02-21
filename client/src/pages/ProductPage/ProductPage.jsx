import React, { useState } from "react";
import './Product.scss'
import Button from '../../components/Button/Button'
import BuyTogether from '../../components/BuyTogether/BuyTogether'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import plusIcon from "./img/icon-plus.png";
import minusIcon from "./img/icon-minus.png";


export const ProductPage = () => {
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  let [count, setCount] = useState(1);

  const price = data?.attributes?.price;

  const totalPrice = count * price;

  const handleDec = () => {
    setCount(count - 1 > 0 ? count - 1 : count = 1)
  }

  const handleInc = () => {
    setCount(count + 1)
  }

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
          <div className='price_text'>Price per unit ${price}</div>
          <div className="price_total">Total price: ${totalPrice}</div>
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
            <div className='price_text'>${data?.attributes?.price}</div>

            <div className="count_block">
              <Button text='ADD TO CART'
              />
              <div className="count__box">
                {count}
                {/* <input type="number" className="count__input" min="1" max="100" value="1" /> */}
              </div>
              <div className="count__controls">
                <button onClick={handleInc} type="button" className="count_up">
                  <img className="count_up_img" src={plusIcon} alt="Increase" />
                </button>
                <button onClick={handleDec} type="button" className="count_down">
                  <img className="count_down_img" src={minusIcon} alt="Decrease" />
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
