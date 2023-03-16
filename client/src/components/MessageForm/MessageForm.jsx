import '../MessageForm/MessageForm.scss'

const MessageForm = (props) => {
  const dopname = props.dopname ? props.dopname : ''
  return (
    <div>
      <div className={dopname + 'formblock'}>
        <div className={dopname + 'formblock_padding'}>
          <h4 className={dopname + 'heading-mini heading-mini_form'}>
            Send us message
          </h4>
          <div className={dopname + 'nametextbox'}>Full name</div>
          <input
            className={dopname + 'textbox'}
            type='text'
            placeholder='Your Name'
          />
          <div className={dopname + 'nametextbox'}>Email</div>
          <input
            className={dopname + 'textbox'}
            type='email'
            placeholder='Your Email'
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
