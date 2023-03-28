import './HistoryOfOrders.scss'
import HistoryOfOrdersCard from '../HistoryOfOrdersCard/HistoryOfOrdersCard'
import LeftSideProfile from '../LeftSideProfile/LeftSideProfile'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/UserContext'
import useFetch from '../../hooks/useFetch'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import CircularProgress from "@mui/material/CircularProgress"
import { Link } from 'react-router-dom'

const HistoryOfOrders = () => {
  const { user } = useContext(AuthContext)
  const { data, error, loading } = useFetch(
    `orders?filters[mail][$eq]=${user.email}`
  )
  const [value, setValue] = useState('all')

  const fnSort = (a, b) => (a.id < b.id ? 1 : -1)
  data?.sort(fnSort)

  const selectOrders =
    value === 'all'
      ? data
      : data?.filter((el) => el.attributes.orderStatus === value)
  const sumCurrentOrders = data?.filter(
    (el) => el.attributes.orderStatus === 'current'
  )
  const sumCompletedOrders = data?.filter(
    (el) => el.attributes.orderStatus === 'completed'
  )
  const sumCanceledOrders = data?.filter(
    (el) => el.attributes.orderStatus === 'canceled'
  )

  const handleClick = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='historyOfOrders'>
      <div className='historyOfOrders_leftPart'>
        <LeftSideProfile />
      </div>
      <form className='historyOfOrders_rightPart'>
        <div className='historyOfOrders_heading'>History of orders</div>
        <div className='historyOfOrders_filter_box'>
          <ul className='historyOfOrders_filter_ul'>
            <input
              className='historyOfOrders_filter_input'
              id='1'
              type='radio'
              name='radio'
              value='all'
              onChange={handleClick}
              checked={value === 'all'}
            />
            <li className='historyOfOrders_filter_link linkorders_first'>
              <label className='historyOfOrders_filter_label' htmlFor='1'>
                All orders ({data?.length})
              </label>
            </li>
            <input
              className='historyOfOrders_filter_input'
              id='2'
              type='radio'
              name='radio'
              value='current'
              onChange={handleClick}
              checked={value === 'current'}
            />
            <li className='historyOfOrders_filter_link'>
              <label className='historyOfOrders_filter_label' htmlFor='2'>
                Current ({sumCurrentOrders?.length})
              </label>
            </li>
            <input
              className='historyOfOrders_filter_input'
              id='3'
              type='radio'
              name='radio'
              value='completed'
              onChange={handleClick}
              checked={value === 'completed'}
            />
            <li className='historyOfOrders_filter_link'>
              <label className='historyOfOrders_filter_label' htmlFor='3'>
                Completed ({sumCompletedOrders?.length})
              </label>
            </li>
            <input
              className='historyOfOrders_filter_input'
              id='4'
              type='radio'
              name='radio'
              value='canceled'
              onChange={handleClick}
              checked={value === 'canceled'}
            />
            <li className='historyOfOrders_filter_link'>
              <label className='historyOfOrders_filter_label' htmlFor='4'>
                Canceled ({sumCanceledOrders?.length})
              </label>
            </li>
          </ul>
          <div className='historyOfOrders_heading-mini_box'>
            <div className='historyOfOrders_heading-mini'>{value}</div>
            <div className='historyOfOrders_heading-mini'>
              {selectOrders?.length} orders
            </div>
          </div>
          <div className='historyOfOrders_line'></div>
        </div>
        <div className='historyOfOrders_orders_box'>
          {error ? (
            <Alert severity='error'>Something went wrong!</Alert>
          ) : loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color='success' />
            </Box>
          ) : (
            selectOrders?.map((order, i) => {
              return (
                <Link
                  className='historyOfOrders_linkOrder'
                  to='/orderPage'
                  key={i}
                >
                  <HistoryOfOrdersCard value={value} order={order} key={i} />
                </Link>
              )
            })
          )}
        </div>
      </form>
    </div>
  )
}

export default HistoryOfOrders
