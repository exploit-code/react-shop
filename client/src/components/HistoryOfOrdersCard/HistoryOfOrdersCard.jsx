import './HistoryOfOrdersCard.scss'

// statusOrder: 'current',
// statusOrder: 'completed',
// statusOrder: 'canceled',

const HistoryOfOrdersCard = ({ order }) => {
  return (
    <div className='orderCardForHistory'>
      <div className='orderCardForHistory_order_card paddingForPosition'>
        <div
          className={'orderCardForHistory_status_order ' + order.statusOrder}
        >
          <span class={'icon i' + order.statusOrder}></span>
          {order.statusOrder}
        </div>
        <div className={'orderCardForHistory_number_order'}>
          Courier delivery No.{order.number}
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Registration date:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.regDate}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Delivery:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.delivery}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Address:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.address}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Payment method:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.paymentMethod}
          </div>
        </div>
        <div className='orderCardForHistory_infoOrder_box'>
          <div className={'orderCardForHistory_infoOrder_title'}>
            Order amount:&nbsp;
          </div>
          <div className={'orderCardForHistory_infoOrder_info'}>
            {order.amount}$
          </div>
        </div>
        <div className='orderCardForHistory_imgOrder_box posabsolute'>
          {order['img'].map((img, i) => {
            if (i < 3) {
              return (
                <img
                  src={img}
                  alt=''
                  class={'imgOrder_round relative_' + i}
                  key={i}
                ></img>
              )
            }
            if (i === 3)
              return (
                <img
                  src={'img/dots.png'}
                  alt=''
                  class={'imgOrder_round_dots relative_' + i}
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
