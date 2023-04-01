import './OrderCard.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/UserContext'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const statusTree = [
  {
    nameStatus: 'Processed',
    title: 'Order is processed',
    text: 'Your order has been received. Thank you!',
  },
  {
    nameStatus: 'Going',
    title: 'Order is going',
    text: 'We complete and pack your order.',
  },
  {
    nameStatus: 'Collected',
    title: 'Order collected',
    text: 'We collected the order and handed it over for delivery.',
  },
  {
    nameStatus: 'OnWay',
    title: 'Order on the way',
    text: 'You will receive your order soon. Wait for a notification or a call from the courier!',
  },
  {
    nameStatus: 'Delivered',
    title: 'Delivered',
    text: 'Thank you, we are glad that you are our client!',
  },
]

const OrderCard = () => {
  const id = Number(useParams().id)
  const { data, error, loading } = useFetch(`orders?filters[id][$eq]=${id}`)

  console.log('data', data)
  console.log('idInUrl', id)

  const order = data?.find((el) => el.id === id)

  console.log('order', order)
  console.log('order.id', order?.id)
  console.log('order.attributes.createdAt', order?.attributes?.createdAt)
  console.log('order.attributes.orderStatus', order?.attributes?.orderStatus)
  const registrationDate = order?.attributes?.createdAt
  const createdAtStr = registrationDate?.slice(0, 10)
  const dateCreatedAtArr = createdAtStr?.split('')
  dateCreatedAtArr?.splice(4, 1, '/')
  dateCreatedAtArr?.splice(7, 1, '/')
  const createdAt = dateCreatedAtArr?.join('')

  const timeDelivery = registrationDate?.slice(11, 19)

  const array = []
  order?.attributes?.cartItems?.map((el) => array.push(el.price * el.quantity))
  const totalAmount = array?.reduce((prev, cur) => prev + cur, 0).toFixed(2)

  let classStatus = ''
  let searchName = order?.attributes?.currentOrderStatus

  let index = -1
  if (order?.attributes?.orderStatus === 'current') {
    index = statusTree.findIndex((el) => el.nameStatus === searchName)
  } else if (order?.attributes?.orderStatus === 'completed') {
    searchName = 'Delivered'
    index = statusTree.findIndex((el) => el.nameStatus === searchName)
  } else if (order?.attributes?.orderStatus === 'canceled') {
    index = -1
  }

  console.log('index', index)

  return (
    <div className='orderCard'>
      {error ? (
        <Alert severity='error'>Something went wrong!</Alert>
      ) : loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color='success' />
        </Box>
      ) : (
        <div className='orderCard__leftPart'>
          <Link className='orderCard__linkBack' to='/historyOfOrders'>
            History of orders
          </Link>

          <div className='orderCard__headerBox'>
            <div className='orderCard__heading'>Order №{order?.id}</div>
            <div
              className={
                'orderCard__status_order ' + order?.attributes?.orderStatus
              }
            >
              <span
                className={'icon i' + order?.attributes?.orderStatus}
              ></span>
              {order?.attributes?.orderStatus}
            </div>
          </div>

          <div className='orderCard__content'>
            <div className='orderCard__content_orderInfo'>
              <div className='orderCard__content_infoBox'>
                <div class='orderCard__content_title'>
                  Registration date:&nbsp;
                </div>
                <div className={'orderCard__content_info'}>
                  {`${createdAt} ${timeDelivery}`}
                </div>
              </div>

              <div className='orderCard__content_infoBox'>
                <div class='orderCard__content_title'>Delivery:&nbsp;</div>
                <div className={'orderCard__content_info'}>{createdAt}</div>
              </div>

              <div className='orderCard__content_infoBox'>
                <div class='orderCard__content_title'>Address:&nbsp;</div>
                <div className={'orderCard__content_info'}>
                  {order?.attributes?.deliveryAddress
                    ? order?.attributes?.deliveryAddress
                    : '60-49 Road 11378 NewYork'}
                </div>
              </div>

              <div className='orderCard__content_infoBox'>
                <div class='orderCard__content_title'>
                  Payment method:&nbsp;
                </div>
                <div className={'orderCard__content_info'}>
                  {order?.attributes?.payByCreditCard}
                </div>
              </div>

              <div className='orderCard__content_infoBox'>
                <div class='orderCard__content_title'>Order amount:&nbsp;</div>
                <div className={'orderCard__content_info'}>
                  {totalAmount ? totalAmount : ''}$
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

              <div className='orderCard__content_imgOrder_box'>
                {order?.attributes?.cartItems?.map(({ img, id }, i) => {
                  return (
                    <div key={i}>
                      <div className='orderCard_boxForItems orderCardPosreletive'>
                        <Link
                          className='orderCard__linkItem'
                          to={`/productpage/${id}`}
                        >
                          <img
                            src={process.env.REACT_APP_UPLOAD_URL + img}
                            alt=''
                            className={'orderCardImgOrder_round'}
                          />
                        </Link>
                        <div className='orderCard_amountItems'>x6</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {error ? (
        <Alert severity='error'>Something went wrong!</Alert>
      ) : loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color='success' />
        </Box>
      ) : (
        <div className='orderCard__rightPart'>
          <div className='orderCard__statusTree'>
            {statusTree.map(({ title, text }, i) => {
              if (i <= index) {
                classStatus = 'statusActive'
              } else {
                classStatus = 'statusClose'
              }
              return (
                <div className='orderCard__statusTree_box'>
                  <div className={'orderCard__statusTree_title' + classStatus}>
                    {title}
                  </div>
                  <div className='orderCard__statusTree_info'>{text}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderCard
