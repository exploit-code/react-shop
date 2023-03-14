import './Post.scss'
import Like from '../../components/Like/Like'

const Post = (props) => {
  return (
    <div>
      <div className='post' id='post'>
        <div className='post__up'>
          <div className='post__up_title'>{props.blogNeed.maintitle}</div>
          <p className='post__up_writer'>{props.blogNeed.writer}</p>
          <div className='post__up_stick'></div>
        </div>
        <div className='post__photo'>
          <div className='post__photo_left'>{props.blogNeed.articles}</div>
          <div className='post__photo_right'>
            <img className='post__photo_img' src={props.blogNeed.image} alt='postImage'></img>
            {/* <p className='post__photo_right_descimage'>{props.blogNeed.descimage}</p> */}
          </div>
        </div>
        <div className='post__text'>
          <p className='post__text_h1'>{props.blogNeed.secondtitle}</p>
          <p className='post__text_p'>{props.blogNeed.seconddesc1}</p>
          <p className='post__text_p'>{props.blogNeed.seconddesc2}</p>
        </div>
        <div className='post__text'>
          <p className='post__text_h1'>{props.blogNeed.thriedtitle}</p>
          <p className='post__text_p'>{props.blogNeed.thrieddesc1}</p>
          <p className='post__text_p'>{props.blogNeed.thrieddesc2}</p>
        </div>
        <div className='post__like'>
          <Like />
        </div>

        <div className='post__button' onClick={props.changeshowForm}>
          Like what you've just read? Click here to subscribe to our blog!
        </div>
      </div>
      <form
        className='formsubscribe'
        style={{ display: props.showForm ? 'flex' : 'none' }}
      >
        <p className='formsubscribe_title'>Subscribe to Healthy Living Blog</p>
        <input
          type='email'
          className='formsubscribe_input'
          placeholder='Your Email'
          onChange={props.handleChange}
        />
        <div className='formsubscribe_confirm'>
          <input
            className='formsubscribe_confirm_checkbox'
            type='checkbox'
            checked={props.stateChecked}
            onChange={(e) => props.setstateChecked(e.target.checked)}
          />
          <label className='formsubscribe_confirm_label'>
            I agree with the site's security policy
          </label>
        </div>
        <div className='formsubscribe_bottom'>
          <button
            className='formsubscribe_bottom_button'
            onClick={props.handleSubmit}
          >
            SUBSCRIBE
          </button>
          <button
            className='formsubscribe_bottom_button'
            onClick={props.changeshowForm}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  )
}

export default Post;
