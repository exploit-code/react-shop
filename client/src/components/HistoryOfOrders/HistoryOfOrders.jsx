import './HistoryOfOrders.scss'
import HistoryOfOrdersCard from '../HistoryOfOrdersCard/HistoryOfOrdersCard'
import LeftSideProfile from '../LeftSideProfile/LeftSideProfile'

const HistoryOfOrders = () => {
  const countAll = 20
  const countCurrent = 0
  const countCompleted = 19
  const countCanceled = 1
  const orders = [
    {
      statusOrder: 'current',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/blueberry_dbe40ddb71.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
      ],
    },
    {
      statusOrder: 'current',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/date_fruit_a8bcb04c00.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/blueberry_dbe40ddb71.png',
      ],
    },
    {
      statusOrder: 'completed',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/fresh_raspberry_2e3cecb5b5.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
      ],
    },
    {
      statusOrder: 'completed',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/octopus_1f0aa44d11.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
        'http://localhost:1337/uploads/fresh_raspberry_2e3cecb5b5.png',
        'http://localhost:1337/uploads/date_fruit_a8bcb04c00.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
      ],
    },
    {
      statusOrder: 'completed',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
      ],
    },
    {
      statusOrder: 'canceled',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/fresh_organic_apricot_6768d5fb9f.png',
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/carrot_juice_371e784b82.jpg',
      ],
    },
    {
      statusOrder: 'canceled',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/raisin_634970fc83.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/fresh_organic_apricot_6768d5fb9f.png',
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
        'http://localhost:1337/uploads/raisin_634970fc83.png',
      ],
    },
    {
      statusOrder: 'canceled',
      number: '32568',
      regDate: '03/05/2023',
      delivery: '03/05/2023 04:50-06:50',
      address: '60-49 Road 11378 NewYork',
      paymentMethod: 'cash',
      amount: '325',
      img: [
        'http://localhost:1337/uploads/raw_broccoli_005aac881b.png',
        'http://localhost:1337/uploads/tomato_hybrid_4e77dbf9ff.png',
      ],
    },
  ]
  return (
    <div className='historyOfOrders'>
      <div className='historyOfOrders_leftPart'>
        <LeftSideProfile />
      </div>
      <div className='historyOfOrders_rightPart'>
        <div className='historyOfOrders_heading'>History of orders</div>
        <div className='historyOfOrders_filter_box'>
          <ul className='historyOfOrders_filter_ul'>
            <li className='historyOfOrders_filter_link linkorders_first'>
              All orders ({countAll})
            </li>
            <li className='historyOfOrders_filter_link'>
              Current ({countCurrent})
            </li>
            <li className='historyOfOrders_filter_link'>
              Completed ({countCompleted})
            </li>
            <li className='historyOfOrders_filter_link'>
              Canceled ({countCanceled})
            </li>
          </ul>
          <div className='historyOfOrders_heading-mini_box'>
            <div className='historyOfOrders_heading-mini'>All orders</div>
            <div className='historyOfOrders_heading-mini'>
              {countAll} orders
            </div>
          </div>
          <div className='historyOfOrders_line'></div>
        </div>
        <div className='historyOfOrders_orders_box'>
          {orders.map((order, i) => {
            return <HistoryOfOrdersCard order={order} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryOfOrders
