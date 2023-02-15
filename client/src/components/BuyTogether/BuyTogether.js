import './buyTogether.scss'
import Button from '../Button/Button'
import { getHttpHost, getUrl } from '../../helpers/UrlHelper'

// дефолтная модель данных
const _getDefaultProps = () => {
  const defaultProduct = {
    id: 1,
    img: 'nuts.png',
    name: 'Hazelnuts filbert nut',
    price: 30.0,
  }

  return {
    title: 'Together with this product, they buy',
    products: [defaultProduct, defaultProduct, defaultProduct],
    addToCart: () => {
      alert('On ADD To CART')
    },
  }
}

// продукты, которые покупают вместе, сделан отдельным компонентом, чтобы
// можно было использовать повторно, в корзине или еще где-то,
// назвать тоже можно по-другому, например, "вы недавно смотрели"
export const BuyTogether = (props) => {
  // проверяем пустые ли пропсы, если да, то заполняем данными по умолчанию
  const { title, products, addToCart } =
    JSON.stringify(props) === JSON.stringify({}) ? _getDefaultProps() : props
  return (
    <div className='buytogether'>
      <div className='buytogether__content'>
        <div className='alignCenter'>
          <div className='alignCenter'>
            <div className='buytogether__content__heading'>{title}</div>
            <div className='buytogether__content__shortLine'></div>
          </div>
        </div>
        <div className='buytogether__content__boxProds'>
          {/* рендерим массив продуктов, которые покупают вместе */}
          {products.map((product, i) => {
            return (
              <div className='buytogether__content__boxProd' key={i}>
                <div className='buytogether__content__box'>
                  <div className='buytogether__content__boxleft'>
                    {/* ссылка на страницу с продуктом */}
                    <a href={getUrl(`product/${product.id}`)}>
                      <img
                        className='buytogether__content__img'
                        src={`../img/${product.img}`}
                        alt={product.name}
                      ></img>
                    </a>
                  </div>
                  <div className='buytogether__content__boxright'>
                    <div className='buytogether__content__text'>
                      {product.name}
                      <div className='buytogether__content__text bold'>
                        ${product.price}
                      </div>
                    </div>
                  </div>
                </div>
                <Button text='ADD TO CART' onClick={addToCart} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BuyTogether
