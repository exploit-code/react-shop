import './HistoryOfOrders.scss'
import HistoryOfOrdersCard from '../HistoryOfOrdersCard/HistoryOfOrdersCard'
import LeftSideProfile from '../LeftSideProfile/LeftSideProfile'
import { useContext } from 'react'
import { AuthContext } from '../../context/UserContext'
import useFetch from '../../hooks/useFetch'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import CircularProgress from "@mui/material/CircularProgress"

const HistoryOfOrders = () => {

  const { user } = useContext(AuthContext);
  const { data, error, loading } = useFetch(`orders?filters[mail][$eq]=${user.email}`)

  const fnSort = (a, b) => (a.id < b.id) ? 1 : -1
  data?.sort(fnSort)

  const sumCurrentOrders= data?.filter(el =>el.attributes.orderStatus === 'current')
  const sumCompletedOrders= data?.filter(el =>el.attributes.orderStatus === 'completed')
  const sumCanceledOrders= data?.filter(el =>el.attributes.orderStatus === 'canceled')
  
 

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
              All orders ({data?.length})
            </li>
            <li className='historyOfOrders_filter_link'>
              Current ({sumCurrentOrders?.length})
            </li>
            <li className='historyOfOrders_filter_link'>
              Completed ({sumCompletedOrders?.length})
            </li>
            <li className='historyOfOrders_filter_link'>
              Canceled ({sumCanceledOrders?.length})
            </li>
          </ul>
          <div className='historyOfOrders_heading-mini_box'>
            <div className='historyOfOrders_heading-mini'>All orders</div>
            <div className='historyOfOrders_heading-mini'>
              {data?.length} orders
            </div>
          </div>
          <div className='historyOfOrders_line'></div>
        </div>
        <div className='historyOfOrders_orders_box'>
          {error 
          ? <Alert severity="error">Something went wrong!</Alert> 
          : loading 
                  ? (<Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <CircularProgress color="success"/>
                    </Box>) 
                  : data?.map((order, i) => {
            return <HistoryOfOrdersCard order={order.attributes} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HistoryOfOrders
