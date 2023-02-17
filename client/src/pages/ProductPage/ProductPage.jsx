import React from "react";
import './Product.scss'
import Button from '../../components/Button/Button'
import BuyTogether from '../../components/BuyTogether/BuyTogether'
import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";



export const ProductPage = () => {
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

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
              alt=""
            />
            {/* </a> */}
            <Button text='ADD TO CART'
            />
            <div className='price_text'>${data?.attributes?.price}</div>
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
