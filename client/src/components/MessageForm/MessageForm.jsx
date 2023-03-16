import { useState } from 'react'
import '../MessageForm/MessageForm.scss'

const MessageForm = (props) => {
  const [mail, setMail] = useState('')
  const [fullName, setName] = useState('')
  const [message, setMessage] = useState('')

  const [mailValid, setMailValid] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)
  const [mailError, setEmailError] = useState('Email не может быть пустым')
  const [nameError, setNameError] = useState('Имя не может быть пустым')
  const [messageError, setMessageError] = useState('Введите сообщение')

  const dopname = props.dopname ? props.dopname : ''

  // Валидация поле email
  const emailHandler = (e) => {
    setMail(e.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email должен содержать @domen.ru')
    } else {
      setEmailError('')
    }
  }

  // Валидация поле name
  const nameHandler = (e) => {
    setName(e.target.value)
    if (!e.target.value) {
      setNameError('Имя не может быть пустым')
    } else {
      setNameError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'mail':
        setMailValid(true)
        break
      case 'fullName':
        setNameValid(true)
        break
    }
  }


  return (
    <div>
      <div className={dopname + 'formblock'}>
        <div className={dopname + 'formblock_padding'}>
          <h4 className={dopname + 'heading-mini heading-mini_form'}>
            Send us message
          </h4>

          <div className={dopname + 'nametextbox'}>Full name</div>
          {(nameValid && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
          <input
            className={dopname + 'textbox'}
            name='fullName'
            type='text'
            placeholder='Your Name'
            value={fullName}
            onBlur={e => blurHandler(e)}
            onChange={e => nameHandler(e)}
          />

          <div className={dopname + 'nametextbox'}>Email</div>
          {(mailValid && mailError) && <div style={{ color: 'red' }}>{mailError}</div>}
          <input
            className={dopname + 'textbox'}
            name='mail'
            type='email'
            placeholder='Your Email'
            value={mail}
            onBlur={e => blurHandler(e)}
            onChange={e => emailHandler(e)}
          />

          <div className={dopname + 'nametextbox'}>Message</div>
          <textarea
            className={dopname + 'textbox ' + dopname + 'textbox_textarea'}
            cols='30'
            rows='10'
            placeholder='Your Message'
          ></textarea>
          <div className={dopname + 'contacts_button'}>{props.children}</div>
        </div>
      </div>
    </div>
  )
}
export default MessageForm
