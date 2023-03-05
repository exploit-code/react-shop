import styles from './AddToCartBtn.module.scss'
import { useState } from "react";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";


export function AddToCartBtn(props) {
  const dispatch = useDispatch()
  const [activeState, setActiveState] = useState(false);

  const handlerAdded = () => {
    if(!activeState) {
      return `${styles.addToCart}`
    } else {
      return `${styles.addToCart} ${styles.added}`
    }
  }

  console.log(props.title)

  const cartState = () => {
    dispatch(
      addToCart({
          id: props.id,
          title: props.title,
          desc: props.desc,
          price: props.price,
          img: props.img,
          totalPriceItem: props.totalpriceitem,
          quantity: props.quantity,
        }
      )
    )
    setActiveState(!activeState);

    setTimeout(() => {
      setActiveState(activeState);
    }, 3000)

  }
  return (
    <>
      <button {...props} className={handlerAdded()} onClick={() => cartState()}>
        <div className={styles.default}>ADD TO CART</div>
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