import './HistoryOfOrdersCard.scss'

const HistoryOfOrdersCard = ({ order }) => {
  

  const registrationDate = order.createdAt
  const createdAtStr = registrationDate.slice(0, 10);
  const dateCreatedAtArr = createdAtStr.split('')
  dateCreatedAtArr.splice(4, 1, '/')
  dateCreatedAtArr.splice(7, 1, '/')
  const createdAt = dateCreatedAtArr.join('')

  const timeDelivery = registrationDate.slice(11, 19)

  const array =[]
  order.cartItems.map(el => array.push(el.price * el.quantity))
  const totalAmount = array.reduce((prev, cur) => prev + cur, 0).toFixed(2)
  
  console.log(createdAt)

  
  return (
    <div className='orderCardForHistory'>
      <div className='orderCardForHistory_order_card'>
        <div
          className={'orderCardForHistory_status_order ' + order.orderStatus}
        >
          <span class={'icon i' + order.orderStatus}></span>
          {order.orderStatus}
        </div>
        <div className={'orderCardForHistory_number_order'}>
          Courier delivery No.{order.number ? order.number : '32568'}
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Registration date:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {`${createdAt} ${timeDelivery}`}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Delivery:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {createdAt}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Address:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.deliveryAddress ? order.deliveryAddress : '60-49 Road 11378 NewYork'}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Payment method:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.payByCreditCard}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Order amount:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {totalAmount ? totalAmount : ''}$
          </div>
        </div>
        <div className='orderCardForHistory_imgOrder_box posreletive'>
          {order.cartItems.map(({img}, i) => {
            if (i < 3) {
              return (
                <img
                  src={process.env.REACT_APP_UPLOAD_URL + img}
                  alt=''
                  class={'imgOrder_round absolute_' + i}
                  key={i}
                ></img>
              )
            }
            if (i === 3)
              return (
                <img
                  src={'img/dots.png'}
                  alt=''
                  class={'imgOrder_round_dots absolute_' + i}
                  key={i}
                ></img>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryOfOrdersCard
