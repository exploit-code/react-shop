import React, { memo } from "react";
import './buyTogether.scss'
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";

export const BuyTogether = ({selectedCats}) => {
  const { data } = useFetch(
    `/products?populate=*${[selectedCats].map(
      (selectedCats) => `&[filters][categories][id][$eq]=${selectedCats}`
    )}`
  );

  const randomItem = () => {
    let min = 0
    let max = data?.length - 3
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const startIndex = randomItem()
  const endIndex = startIndex + 3

  return (
    <div className='buytogether'>
      <div className='buytogether__content'>
        <div className='alignCenter'>
          <div className='buytogether__content__heading'>Buy with this product</div>
          <div className='buytogether__content__shortLine'></div>
        </div>
        <div className='buytogether__content__boxProds'>
          {/* рендерим массив продуктов, которые покупают вместе */}
          {data?.slice(startIndex, endIndex).map((item) => (
            <div key={item.id}>
              <div className="buytogether__content__item">
                <Link to={`/productpage/${item.id}`} className="buytogether__content__link">
                  <div className='overlay'>
                    <img className="buytogether__content__img"
                         src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                         alt={item.attributes.title}/>
                  </div>
                </Link>
                <div className="buytogether__content__title">
                  <div className="buytogether__content__name">{item.attributes.title}</div>
                  <div
                    className="buytogether__content__price">${(item.attributes.price).toFixed(2)}</div>
                </div>
              </div>
              <AddToCartBtn
                id={item?.id}
                title={item?.attributes.title}
                desc={item?.attributes.desc}
                price={item?.attributes.price}
                img={item?.attributes.img.data.attributes.url}
                totalpriceitem={(Number(item?.attributes?.price)).toFixed(2)}
                quantity={1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(BuyTogether) //лишний раз не перерисовыет элемент после обновления стэйта родителя
