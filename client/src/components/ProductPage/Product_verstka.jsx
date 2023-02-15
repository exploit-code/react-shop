<<<<<<< HEAD:client/src/components/Product/Product.js
import './Product.scss'
=======
// import './product.scss'
>>>>>>> main:client/src/components/ProductPage/Product_verstka.jsx
import Button from '../Button/Button'
import BuyTogether from '../BuyTogether/BuyTogether'

// дефолтная модель данных
const _getDefaultProps = () => {
const defaultProduct = {
id: 0,
img: 'banana.jpg',
name: 'Banana',
price: 30.0,
}

return {
product: defaultProduct,
addToCart: () => {
alert('On ADD To CART')
},
}
}

export const Product_verstka = (props) => {
// проверяем пустые ли пропсы, если да, то заполняем данными по умолчанию
const { product, addToCart } =
JSON.stringify(props) === JSON.stringify({}) ? _getDefaultProps() : props

return (
<div className='product'>
<div className='product__content'>
<a className='product__content__link' href='catalog.html'>
Back to catalog
</a>
<div className='alignLeft'>
<div className='alignCenter'>
<div className='product__content__heading'>{product.name}</div>
<div className='product__content__shortLine'></div>
</div>
</div>

<div className='product__content__box'>
<div className='product__content__boxleft'>
 <div className='product__content__boxleftfirst'>
            <a href='#'>
              <img
                className='product__content__img'
                src={`img/${product.img}`}
                alt='product_photo'
             ></img>
           </a>
            <Button text='ADD TO CART' />
             </div>
            <div className='price_text'>${product.price}</div>
          </div>

          <div className='product__content__boxright'>
            <div className='product__content__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
              mollitia quis. Ipsum impedit labore vero hic nobis, ex sit ullam
              fugit dicta amet neque quos, accusamus deleniti possimus, laborum
             iste.
            </div>
          </div>
        </div>
         // нижний блок Покупают вместе - отдельный компонент
       <BuyTogether />
      </div>
    </div>
  )
}

export default Product_verstka
