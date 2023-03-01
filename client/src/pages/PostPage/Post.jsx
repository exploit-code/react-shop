import { useState } from "react";
import SearchTop from "../../components/SearchTop/SearchTop";
import postImage from '../../images/postImage.svg'
import './Post.scss'

const Post = () => {
    const [getPost, setgetPost] = useState({
        maintitle: 'Busting Salad Myths: Eat a Well-Built Salad (If You Want To)',
        writer: 'by Sabrina Goshen, on Dec 1, 2020 12:49:12 PM',
        articles: 'Come on. Weve all heard this before —from friends, from coworkers, and possibly from our own mouths. I swear, salads are easily the most famous “diet food.” Why is that? Do we really have to eat salads to lose weight, clean out our “pipes,” or be healthy? In this blog I break down each of these claims and then talk about ways to improve your veggie game!',
        image: postImage,
        descimage: '“I am going to eat a salad because I’m on a diet.”',
        secondtitle: 'What Vitamin C Can Do for You',
        secondesc1: 'This is usually said when someone is trying to lose weight or be “super healthy.” First, to lose weight, it is widely understood that we must burn more calories than we eat. Thus, we try to minimize our calories to lose the weight. Second, people think that if they eliminate all “processed foods,” they will automatically become healthy. The idea behind salads is that they’re “healthy,” “low-calorie,” and blah blah blah.',
        secondesc2: 'Guess what? Salads can quickly turn into a high-calorie snack or meal and become full of unhealthy saturated fats and sodium. For example, let’s look at the Southwest Avocado Chicken Salad from Wendy’s. Sounds healthy, right? They even market this salad as healthy. A full salad has 530 calories with 34 grams of fat, only 15 grams of carbs, 43 grams of protein, and 1060mg of sodium. First off, that’s not a big salad for all those calories—which will make maintaining a caloric deficit (for weight loss) difficult. Finding foods that can be eaten in large volumes for lower calories tends to help satiety during weight loss attempts. Also, 34 grams of fat is a lot for one meal. The RDA for a full day is 44–77 grams for someone eating 2,000 calories. Now look at the sodium: 1060 mg of sodium is close to half of the RDA for sodium. Yikes. Hey, at least the salad has protein. They got that part right.',
        secondesc3: 'In addition, health is not just about physical well-being. Salads, if built correctly, can most certainly offer physical benefits. But health includes mental and social well-being too. Think for a moment. Does the salad taste good? Am I satisfied? Can I keep this up forever? Am I happy with this? If the answer is “no,” consider a different approach. Any change you make should be one that is sustainable for life. In the midst of making these changes, you must evaluate your physical, mental, and social health at all times. How can you improve one part of well-being without sacrificing another? Finding that balance is the key to SUSTAINABLE, healthful lifestyle changes, which ultimately leads to lifelong results.',
        userId: 1
    })
    const [showForm, setshowForm] = useState()
    const [stateChecked, setstateChecked] = useState(false)
    const [valueInput, setvalueInput] = useState()

    const getStyle = (header, footer, upmainpage, post, none, blur) => {
        header.style = none || blur
        footer.style = none || blur
        upmainpage.style = none || blur
        post.style = none || blur
    }

    const changeshowForm = (e) => {
        const header = document.getElementById('header')
        const footer = document.getElementById('footer')
        const upmainpage = document.getElementById('upmainpage')
        const post = document.getElementById('post')
        const blur = 'filter: blur(2px)'
        const none = 'filter: none'
        if (showForm) {
            e.preventDefault();
            setshowForm(false)
            getStyle(header, footer, upmainpage, post, none)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        else {
            setshowForm(true)
            getStyle(header, footer, upmainpage, post, '', blur)
            window.scrollTo({
                top: 500,
                behavior: 'smooth',
            });
        }
    }
    const handleSubmit = (e) => {
        const header = document.getElementById('header')
        const footer = document.getElementById('footer')
        const upmainpage = document.getElementById('upmainpage')
        const post = document.getElementById('post')
        const none = 'filter: none'
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var valid = re.test(valueInput);
        if (valid) {
            if (stateChecked) {
                e.preventDefault();
                alert('Письмо отправлено на почту ' + valueInput)
                setshowForm(false)
                getStyle(header, footer, upmainpage, post, none)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })

            }
            else {
                e.preventDefault()
                alert('Для продолжения необхоимо согласиться с политикой сайта')
            }
        }
        else {
            alert('Для продолжения введите email')
            e.preventDefault();
        }
    }

    const handleChange = (e) => {
        setvalueInput(e.target.value)
    }

    return (
        <div>
<<<<<<< HEAD
            <SearchTop />
=======
>>>>>>> main
            <div className="post" id='post'>
                <div className="post__up">
                    <div className="post__up_title">{getPost.maintitle}</div>
                    <p className="post__up_writer">{getPost.writer}</p>
                    <div className="post__up_stick"></div>
                </div>
                <div className="post__photo">
                    <div className="post__photo_left">{getPost.articles}</div>
                    <div className="post__photo_right">
                        <img src={getPost.image} alt='postImage'></img>
                        <p className="post__photo_right_descimage">{getPost.descimage}</p>
                    </div>
                </div>
                <div className="post__text">
                    <p className="post__text_h1">{getPost.secondtitle}</p>
                    <p className="post__text_p">{getPost.secondesc1}</p>
                    <p className="post__text_p">{getPost.secondesc2}</p>
                    <p className="post__text_p">{getPost.secondesc3}</p>
                </div>
                <div className="post__text">
                    <p className="post__text_h1">{getPost.secondtitle}</p>
                    <p className="post__text_p">{getPost.secondesc1}</p>
                    <p className="post__text_p">{getPost.secondesc2}</p>
                    <p className="post__text_p">{getPost.secondesc3}</p>
                </div>
                <div className="post__button" onClick={changeshowForm}>Like what you've just read? Click here to subscribe to our blog!</div>
            </div>
            <form className="formsubscribe" style={{ display: showForm ? 'flex' : 'none' }}>
                <p className="formsubscribe_title">Subscribe to Healthy Living Blog</p>
                <input type="email" className="formsubscribe_input" placeholder="Your Email" onChange={handleChange} />
                <div className="formsubscribe_confirm">
                    <input className="formsubscribe_confirm_checkbox" type="checkbox" checked={stateChecked} onChange={(e) => setstateChecked(e.target.checked)} />
                    <label className="formsubscribe_confirm_label">I agree with the site's security policy</label>
                </div>
                <div className="formsubscribe_bottom">
                    <button className="formsubscribe_bottom_button" onClick={handleSubmit}>SUBSCRIBE</button>
                    <button className="formsubscribe_bottom_button" onClick={changeshowForm}>CANCEL</button>
                </div>
            </form >
        </div >
    )
}

<<<<<<< HEAD
export default Post;
=======
export default Post;
>>>>>>> main
