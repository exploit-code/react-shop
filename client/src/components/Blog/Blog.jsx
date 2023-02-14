import './Blog.scss';
import Green_line from './img/Green_line.svg'
import Salat from './img/Salat.png'
import Citrus from './img/Citrus.png'
import Avokado from './img/Avokado.png'
import Calendar from './img/Calendar.svg'
import Sms from './img/Sms.svg'


const Blog = () => {
    return (
        <div className="item-sec">
            <div className="container">
                <h3 className="desc">From The Blog</h3>
                <div className="green-line">
                    <img className="line" src={Green_line} alt="line" />
                </div>
                <div className="item-flex">
                    <div className="item">
                        <a className="item-link" href="#">
                            <img className="item-pic" src={Salat} alt="product" />
                            <div className="txt-box">
                                <div className="txt-boxer">
                                    <img className="calendar" src={Calendar} alt="calendar" />
                                    <p className="calendar-chat">May 4,2021</p>
                                    <img className="chat" src={Sms} alt="chat" />
                                    <p className="calendar-chat">54</p>
                                </div>
                                <h4 className="item-heading-box">Busting Salad Myths: Eat a Well-Built Salad (If You Want To)
                                </h4>
                                <p className="item-desc">This is usually said when someone is trying to lose weight or be “super
                                    healthy.” First, to lose weight, it is widely understood that we must burn more calories
                                    than we eat. Thus Read More</p>
                            </div>
                        </a>
                    </div>

                    <div className="item">
                        <a className="item-link" href="#">
                            <div className="item-box">
                                <img className="item-pic" src={Citrus} alt="product" />
                            </div>
                            <div className="txt-box">
                                <div className="txt-boxer">
                                    <img className="calendar" src={Calendar} alt="calendar" />
                                    <p className="calendar-chat">May 4,2021</p>
                                    <img className="chat" src={Sms} alt="chat" />
                                    <p className="calendar-chat">25</p>
                                </div>
                                <h4 className="item-heading-box">Vitamin C: How Much and Which
                                    Sources Are Best for Boosting Immunity?</h4>
                                <p className="item-desc">During cold and flu season, we try to do all we can to prevent illness
                                    or speed up how fast we recover from illness. One such strategy many employ is the use
                                    of Vitamin C for a natural remedy. Read More</p>
                            </div>
                        </a>

                    </div>
                    <div className="item">
                        <a className="item-link" href="#">
                            <img className="item-pic" src={Avokado} alt="product" />
                            <div className="txt-box">
                                <div className="txt-boxer">
                                    <img className="calendar" src={Calendar} alt="calendar" />
                                    <p className="calendar-chat">May 4,2021</p>
                                    <img className="chat" src={Sms} alt="chat" />
                                    <p className="calendar-chat">58</p>
                                </div>
                                <h4 className="item-heading-box">Pump Up the Produce Power in Winter Meals</h4>
                                <p className="item-desc">We’ve all been here before: When it seems the long, gray winter will
                                    never end and you make one more pot of hearty vegetable soup or another casserole. Read
                                    More</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Blog;
