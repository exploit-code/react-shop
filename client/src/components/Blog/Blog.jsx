import './Blog.scss'
import Green_line from './img/Green_line.svg'
import Salat from './img/Salat.png'
import Citrus from './img/Citrus.png'
import Avokado from './img/Avokado.png'
import Calendar from './img/Calendar.svg'
import { Link } from 'react-router-dom'
import Like from '../../components/Like/Like'

// дефолтные данные
const _getDefaultProps = () => {
  return {
    title: 'Together with this product, they buy',
    blogs: [
      {
        id: 1,
        img: Salat,
        date: 'May 4,2021',
        likeCount: '25',
        title: 'Busting Salad Myths: Eat a Well-Built Salad (If You Want To)',
        text: `This is usually said when someone is trying to lose weight
                    or be “super healthy.” First, to lose weight, it is widely
                    understood that we must burn more calories than we eat.`,
        linkReadMore: 'blog/1',
      },
      {
        id: 2,
        img: Citrus,
        date: 'May 7,2021',
        likeCount: '58',
        title: `Vitamin C: How Much and Which Sources Are Best for Boosting
                    Immunity?`,
        text: `During cold and flu season, we try to do all we can to
                    prevent illness or speed up how fast we recover from
                    illness. One such strategy many employ is the use of Vitamin
                    C for a natural remedy.`,
        linkReadMore: 'blog/3',
      },
      {
        id: 3,
        img: Avokado,
        date: 'May 15,2021',
        likeCount: '76',
        title: `Pump Up the Produce Power in Winter Meals`,
        text: `We’ve all been here before: When it seems the long, gray
                    winter will never end and you make one more pot of hearty
                    vegetable soup or another casserole.`,
        linkReadMore: 'blog/2',
      },
    ],
  }
}

const Blog = (props) => {
  const { blogs } =
    JSON.stringify(props) === JSON.stringify({}) ? _getDefaultProps() : props

  return (
    <div className='item-sec'>
      <div className='container'>
        <h3 className='desc'>From The Blog</h3>
        <div className='green-line'>
          <img className='line' src={Green_line} alt='line' />
        </div>
        <div className='item-flex'>
          {blogs.map((blog, i) => {
            return (
              <div className='item' key={i}>
                <div className='item-link'>
                  <img
                    className='blog__item-pic'
                    src={blog.img}
                    alt='product'
                  />

                  <div className='blog__txt-box'>
                    <div className='blog__txt-top'>
                      <div className='blog__txt-boxer'>
                        <img
                          className='blog__topimg'
                          src={Calendar}
                          alt='calendar'
                        />
                        <p className='blog__toptext'>{blog.date}</p>
                      </div>
                      <div className='blog__txt-boxer'>
                        <div>
                          <Like />
                        </div>
                        <p className='blog__toptext'>{blog.likeCount}</p>
                      </div>
                    </div>
                    <Link
                      target='blank'
                      to={blog.linkReadMore}
                      className='item-link-readmore'
                    >
                      <h4 className='item-heading-box'>{blog.title}</h4>
                      <div className='item-desc'>{blog.text}</div>
                      <div className='blog__readmore'>Read More</div>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
