import styles from './AddToCartBtn.module.scss'
import { useState } from 'react'
import { addToCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function AddToCartBtnCollection(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [activeState, setActiveState] = useState(false)

  const handlerAdded = () => {
    if (!activeState) {
      return `${styles.addToCart}`
    } else {
      return `${styles.addToCart} ${styles.added}`
    }
  }

  const cartState = () => {
    for (let i = 0; i < props?.order?.attributes?.cartItems?.length; i++) {
      dispatch(
        addToCart({
          id: props?.order?.attributes?.cartItems[i].id,
          title: props?.order?.attributes?.cartItems[i].title,
          desc: props?.order?.attributes?.cartItems[i].desc,
          price: props?.order?.attributes?.cartItems[i].price,
          img: props?.order?.attributes?.cartItems[i].img,
          totalPriceItem: props?.order?.attributes?.cartItems[i].totalPriceItem,
          quantity: props?.order?.attributes?.cartItems[i].quantity,
        })
      )
    }

    setActiveState(!activeState)

    setTimeout(() => {
      setActiveState(activeState)
      navigate('/cart')
    }, 3000)
  }
  return (
    <>
      <button {...props} className={handlerAdded()} onClick={() => cartState()}>
        <div className={styles.default}>{props.name}</div>
        <div className={styles.success}>ADDED</div>
        <div className={styles.cart}>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.dots}></div>
      </button>
    </>
  )
}
