import './AddToCartBtn.scss'


export function AddToCartBtn(props) {
  return (
    <>
      <button {...props} style={props} onClick={props.click}>
        <div className="default">ADD TO CART</div>
        <div className="success">ADDED</div>
        <div className="cart">
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="dots"></div>
      </button>
    </>
  )
}