import './OrderPage.scss'
import LeftSideProfile from '../../components/LeftSideProfile/LeftSideProfile'
import OrderCard from '../../components/OrderCard/OrderCard'

export const OrderPage = () => {
  return (
    <div className='orderPage'>
      <div className='orderPage__leftPart'>
        <LeftSideProfile />
      </div>
      <div className='orderPage__rightPart'>
        <OrderCard />
      </div>
    </div>
  )
}

export default OrderPage
