import {useContext, useState} from 'react'
import '../MessageForm/MessageForm.scss'
import {AuthContext} from "../../context/UserContext";
import Button from "../Button/Button";

const MessageForm = (props) => {
  const { user } = useContext(AuthContext);
  const [mail, setMail] = useState(user?.email)
  const [fullName, setName] = useState('')

  const [message, setMessage] = useState('test')
  const [mailValid, setMailValid] = useState(false)
  const [nameValid, setNameValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)
  const [mailError, setEmailError] = useState('Email не может быть пустым')
  const [nameError, setNameError] = useState('Имя не может быть пустым')
  const [messageError, setMessageError] = useState('Введите сообщение')

  const dopname = props.dopname ? props.dopname : ''
  const handleClose = () => props.setOpen(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  //START of getForm
  function getForm() {
    let message = 'test'
    let body = {
      data: {
        fullName,
        mail,
        message,
      },
    }
    fetch(`${process.env.REACT_APP_API_URL}/forms`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(() => {
      alert('Thank You! Form Posted to Database')
    })
  }

  // const getForm = async () => {
  //   try {
  //     await makeRequest.post("/forms", {
  //       mail,
  //       fullName,
  //       message,
  //     });
  //   } catch (err) {
  //     console.log(err, 'fuck');
  //   }
  // };
  //**END of getForm
  // Валидация поле email
  const emailHandler = (e) => {
    setMail(e.target.value)
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
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
      <form onSubmit={handleSubmit}>
        <div className={dopname + 'formblock'}>
          <div className={dopname + 'formblock_padding'}>
            <h4 className={dopname + 'heading-mini heading-mini_form'}>
              Send us message
            </h4>

            <div className={dopname + 'nametextbox'}>Full name</div>
            {nameValid && nameError && (
              <div style={{ color: 'red' }}>{nameError}</div>
            )}
            <input
              className={dopname + 'textbox'}
              name='fullName'
              type='text'
              placeholder='Your Name'
              value={fullName}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => nameHandler(e)}
            />

            <div className={dopname + 'nametextbox'}>Email</div>
            {mailValid && mailError && (
              <div style={{ color: 'red' }}>{mailError}</div>
            )}
            <input
              className={dopname + 'textbox'}
              name='mail'
              type='email'
              placeholder='Your Email'
              value={mail}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHandler(e)}
            />

            <div className={dopname + 'nametextbox'}>Message</div>
            <textarea
              className={dopname + 'textbox ' + dopname + 'textbox_textarea'}
              cols='30'
              rows='10'
              placeholder='Your Message'
            ></textarea>

            {dopname === 'support_' ? (
              <div className='modal_buttons_box'>
                <button onClick={getForm} className='button modal_button'>
                  SUBMIT
                </button>
                <Button
                  text='CANCEL'
                  classname='modal_button'
                  onClick={handleClose}
                ></Button>
              </div>
            ) : (
              <div className={dopname + 'contacts_button'}>
                <button onClick={getForm} className={dopname + 'button'}>
                  SUBMIT
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
export default MessageForm
