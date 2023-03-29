import './OrderCard.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const order = {
  //   orderStatus: 'current',
  //   orderStatus: 'canceled',
  orderStatus: 'completed',
  id: 30596353,
  createdAt: '2023/03/28',
  timeDelivery: '12:13:09',
  deliveryAddress:
    '60-49 Road 11378 NewYork 60-49 Road 11378 NewYork 60-49 Road 11378 NewYork 60-49 Road 11378 NewYork 60-49 Road 11378 NewYork 60-49 Road 11378 NewYork',
  payByCreditCard: 'PayCash',
  totalAmount: '3054545.78',
  img: [
    'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
    'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
    'http://localhost:1337/uploads/octopus_1f0aa44d11.png',
    'http://localhost:1337/uploads/fresh_raspberry_2e3cecb5b5.png',
    'http://localhost:1337/uploads/date_fruit_a8bcb04c00.png',
    'http://localhost:1337/uploads/blueberry_dbe40ddb71.png',
    'http://localhost:1337/uploads/raisin_634970fc83.png',
    'http://localhost:1337/uploads/fresh_organic_apricot_6768d5fb9f.png',
    'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
    'http://localhost:1337/uploads/Lettuce_49fe5fd45c.png',
    'http://localhost:1337/uploads/Dill_a6ad7c5213.jpg',
    'http://localhost:1337/uploads/Leek_61370ec799.jpg',
    'http://localhost:1337/uploads/green_apple_860ad976fa.png',
    'http://localhost:1337/uploads/grape_juice_6255662d27.png',
    'http://localhost:1337/uploads/multifruit_juice_308372a444.png',
    // 'http://localhost:1337/uploads/red_apple_04a3a1de8b.png',
    'http://localhost:1337/uploads/mussels_81c536ee88.png',
    'http://localhost:1337/uploads/dried_persimmon_a44b8b7273.png',
    'http://localhost:1337/uploads/trout_be1175f200.png',
    'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
    'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
    'http://localhost:1337/uploads/octopus_1f0aa44d11.png',
    'http://localhost:1337/uploads/fresh_raspberry_2e3cecb5b5.png',
    'http://localhost:1337/uploads/date_fruit_a8bcb04c00.png',
    'http://localhost:1337/uploads/blueberry_dbe40ddb71.png',
    'http://localhost:1337/uploads/raisin_634970fc83.png',
    'http://localhost:1337/uploads/fresh_organic_apricot_6768d5fb9f.png',
    'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
    'http://localhost:1337/uploads/Lettuce_49fe5fd45c.png',
    'http://localhost:1337/uploads/Dill_a6ad7c5213.jpg',
    'http://localhost:1337/uploads/Leek_61370ec799.jpg',
    'http://localhost:1337/uploads/green_apple_860ad976fa.png',
    'http://localhost:1337/uploads/grape_juice_6255662d27.png',
    'http://localhost:1337/uploads/multifruit_juice_308372a444.png',
    'http://localhost:1337/uploads/red_apple_04a3a1de8b.png',
    'http://localhost:1337/uploads/mussels_81c536ee88.png',
    'http://localhost:1337/uploads/dried_persimmon_a44b8b7273.png',
    'http://localhost:1337/uploads/trout_be1175f200.png',
  ],
}

export const OrderCard = () => {
  return (
    <div className='orderCard'>
      <div className='orderCard__leftPart'>
        <Link className='orderCard__linkBack' to='/historyOfOrders'>
          History of orders
        </Link>

        <div className='orderCard__headerBox'>
          <div className='orderCard__heading'>Order №{order.id}</div>
          <div className={'orderCard__status_order ' + order.orderStatus}>
            <span className={'icon i' + order.orderStatus}></span>
            {order.orderStatus}
          </div>
        </div>

        <div className='orderCard__content'>
          <div className='orderCard__content_orderInfo'>
            <div className='orderCard__content_infoBox'>
              <div class='orderCard__content_title'>
                Registration date:&nbsp;
              </div>
              <div className={'orderCard__content_info'}>
                {`${order.createdAt} ${order.timeDelivery}`}
              </div>
            </div>

            <div className='orderCard__content_infoBox'>
              <div class='orderCard__content_title'>Delivery:&nbsp;</div>
              <div className={'orderCard__content_info'}>{order.createdAt}</div>
            </div>

            <div className='orderCard__content_infoBox'>
              <div class='orderCard__content_title'>Address:&nbsp;</div>
              <div className={'orderCard__content_info'}>
                {order.deliveryAddress}
              </div>
            </div>

            <div className='orderCard__content_infoBox'>
              <div class='orderCard__content_title'>Payment method:&nbsp;</div>
              <div className={'orderCard__content_info'}>
                {order.payByCreditCard}
              </div>
            </div>

            <div className='orderCard__content_infoBox'>
              <div class='orderCard__content_title'>Order amount:&nbsp;</div>
              <div className={'orderCard__content_info'}>
                {order.totalAmount ? order.totalAmount : ''}$
              </div>
            </div>
            <Button
              type='button'
              text='Repeat order'
              classname='orderCard__content_buttonRepeatOrder'
            ></Button>
          </div>
          <div className='orderCard__content_orderItems'>
            <div className='orderCard__content_orderItemsBox_heading'>
              Items in the order:
            </div>
            {/*  */}
            <div className='orderCard__content_imgOrder_box'>
              {order['img'].map((img, i) => {
                return (
                  <div className='orderCard_boxForItems orderCardPosreletive'>
                    <img
                      src={img}
                      alt=''
                      className={'orderCardImgOrder_round'}
                      // style={{
                      //   position: 'absolute',
                      //   left: i * 42 + 'px',
                      // }}
                      key={i}
                    ></img>
                    <div className='orderCard_amountItems' key={i}>
                      x6
                    </div>
                  </div>
                )
              })}
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      <div className='orderCard__rightPart'>
        <div className='orderCard__statusTree'>
          <div className='orderCard__statusTree_box'>
            <div className='orderCard__statusTree_title'>
              Order is processed
            </div>
            <div className='orderCard__statusTree_info'>
              Your order has been received. Thank you!
            </div>
          </div>
          <div className='orderCard__statusTree_box'>
            <div className='orderCard__statusTree_title'>Order is going</div>
            <div className='orderCard__statusTree_info'>
              We complete and pack your order.
            </div>
          </div>
          <div className='orderCard__statusTree_box'>
            <div className='orderCard__statusTree_title'>Order collected</div>
            <div className='orderCard__statusTree_info'>
              We collected the order and handed it over for delivery.
            </div>
          </div>
          <div className='orderCard__statusTree_box'>
            <div className='orderCard__statusTree_title'>Order on the way</div>
            <div className='orderCard__statusTree_info'>
              You will receive your order soon. Wait for a notification or a
              call from the courier!
            </div>
          </div>
          <div className='orderCard__statusTree_box'>
            <div className='orderCard__statusTree_title'>Delivered</div>
            <div className='orderCard__statusTree_info'>
              Thank you, we are glad that you are our client!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
