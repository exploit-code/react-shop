import './HistoryOfOrdersCard.scss'
import { Link } from 'react-router-dom'

const HistoryOfOrdersCard = ({ order }) => {
  const registrationDate = order.attributes.createdAt
  const createdAtStr = registrationDate.slice(0, 10)
  const dateCreatedAtArr = createdAtStr.split('')
  dateCreatedAtArr.splice(4, 1, '/')
  dateCreatedAtArr.splice(7, 1, '/')
  const createdAt = dateCreatedAtArr.join('')

  const timeDelivery = registrationDate.slice(11, 19)

  const array = []
  order.attributes.cartItems.map((el) => array.push(el.price * el.quantity))
  const totalAmount = array.reduce((prev, cur) => prev + cur, 0).toFixed(2)

  return (
    <div className='orderCardForHistory'>
      <Link className='historyOfOrders_linkOrder' to={`/orderPage/${order.id}`}>
        <div className='orderCardForHistory_order_card'>
          <div
            className={
              'orderCardForHistory_status_order ' + order.attributes.orderStatus
            }
          >
            <span className={'icon i' + order.attributes.orderStatus}></span>
            {order.attributes.orderStatus}
          </div>
          <div className={'orderCardForHistory_number_order'}>
            Courier delivery No.{order.id}
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
              {order.attributes.deliveryAddress
                ? order.attributes.deliveryAddress
                : '60-49 Road 11378 NewYork'}
            </div>
          </div>
          <div className='orderCardForHistory_infoOrder_box'>
            <div className={'orderCardForHistory_infoOrder_title'}>
              Payment method:&nbsp;
            </div>
            <div className={'orderCardForHistory_infoOrder_info'}>
              {order.attributes.payByCreditCard}
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
            {order.attributes.cartItems.map(({ img }, i) => {
              if (i < 3) {
                return (
                  <img
                    src={process.env.REACT_APP_UPLOAD_URL + img}
                    alt=''
                    className={'imgOrder_round absolute_' + i}
                    key={i}
                  ></img>
                )
              }
              if (i === 3)
                return (
                  <img
                    src={'img/dots.png'}
                    alt=''
                    className={'imgOrder_round_dots absolute_' + i}
                    key={i}
                  ></img>
                )
            })}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HistoryOfOrdersCard
