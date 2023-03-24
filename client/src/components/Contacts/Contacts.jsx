import './Contacts.scss'
import React from 'react'
import Button from '../Button/Button'
import MapOL from '../MapOL/MapOL'
import MessageForm from '../MessageForm/MessageForm'

const Contacts = () => {
  return (
    <div className='contacts__content'>
      <div className='contacts__content_textheader'>
        <div className='container container_contactus'>
          <div className='contacts__content_headingh'>Contact Us</div>
        </div>
      </div>
      <form  className='container contactsmain'>
        <div className='infocontactspage'>
          <div className='align_img'>
            <img className='pic' src='img/pngwing.png' alt='picturecontactus' />
          </div>

          <h4
            className='heading-mini heading-mini_contactus
                    '
          >
            Address
          </h4>
          <p className='text'>60-49 Road 11378 New York</p>
          <h4
            className='heading-mini heading-mini_contactus
                    '
          >
            Phone
          </h4>
          <ul>
            <li className='listcontacts listcontacts_first text'>
              +65 11.188.888
            </li>
            <li className='listcontacts text'>+65 11.188.889</li>
          </ul>
          <h4
            className='heading-mini heading-mini_contactus
                    '
          >
            Online service
          </h4>
          <ul>
            <li className='listcontactsweb listcontactsweb_first text'>
              <a className='contactslink' href='google.com' target='_blank'>
                www.site.com
              </a>
            </li>
            <li className='listcontactsweb text'>
              <a className='contactslink' href='mailto:good.food.23@mail.ru'>
                good.food.23@mail.ru
              </a>
            </li>
          </ul>
        </div>
        <MessageForm>
          <div className='contacts_button'>
            <Button text='SUBMIT'></Button>
          </div>
        </MessageForm>
      </form>
      <MapOL />
    </div>
  )
}

export default Contacts
