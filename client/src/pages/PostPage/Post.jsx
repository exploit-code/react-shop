import './Post.scss'
import Like from '../../components/Like/Like'
import { Link } from 'react-router-dom'

const Post = (props) => {
  if (!props.blogId) {
    return (
      <div>
        <p className='titleblog'>Choose post...</p>
        <div className='blogmainpage'>
          <Link className='blogmainpage__link' to='/blog/1'>
            <img className='blogmainpage__img' src={props.blogNeed.img1}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title1}</p>
          </Link>
          <Link className='blogmainpage__link' to='/blog/2'>
            <img className='blogmainpage__img' src={props.blogNeed.img2}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title2}</p>
          </Link>
          <Link className='blogmainpage__link' to='/blog/3'>
            <img className='blogmainpage__img' src={props.blogNeed.img3}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title3}</p>
          </Link>
          <Link className='blogmainpage__link' to='/blog/4'>
            <img className='blogmainpage__img' src={props.blogNeed.img4}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title4}</p>
          </Link>
          <Link className='blogmainpage__link' to='/blog/5'>
            <img className='blogmainpage__img' src={props.blogNeed.img5}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title5}</p>
          </Link>
          <Link className='blogmainpage__link' to='/blog/6'>
            <img className='blogmainpage__img' src={props.blogNeed.img6}></img>
            <p className='blogmainpage__txt'>{props.blogNeed.title6}</p>
          </Link>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='parentPost'>
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
            <p className='post__text_h1'>{props.blogNeed.thirdtitle}</p>
            <p className='post__text_p'>{props.blogNeed.thirddesc1}</p>
            <p className='post__text_p'>{props.blogNeed.thirddesc2}</p>
          </div>
          <div className='post__text'>
            <p className='post__text_h1'>{props.blogNeed.fourthtitle}</p>
            <p className='post__text_p'>{props.blogNeed.fourthdesc}</p>
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
}

export default Post;
