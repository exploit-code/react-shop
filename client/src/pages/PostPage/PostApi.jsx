import { useState } from "react";
import SearchTop from "../../components/SearchTop/SearchTop";
import postImage1 from '../../images/postImage1.svg'
import postImage2 from '../../images/postImage2.jpg'
import postImage3 from '../../images/postImage3.jpg'
import './Post.scss'
import Like from '../../components/Like/Like'
import { Link, useParams } from "react-router-dom";
import Post from "./Post";

const PostApi = () => {
    const [showForm, setshowForm] = useState()
    const [stateChecked, setstateChecked] = useState(false)
    const [valueInput, setvalueInput] = useState()
    const blogId = parseInt(useParams().id);

    const [getPost, setgetPost] = useState([{
        maintitle: 'Busting Salad Myths: Eat a Well-Built Salad (If You Want To)',
        writer: 'by Sabrina Goshen, on Dec 1, 2020 12:49:12 PM',
        articles:
            'Come on. Weve all heard this before —from friends, from coworkers, and possibly from our own mouths. I swear, salads are easily the most famous “diet food.” Why is that? Do we really have to eat salads to lose weight, clean out our “pipes,” or be healthy? In this blog I break down each of these claims and then talk about ways to improve your veggie game!',
        image: postImage1,
        secondtitle: 'I am going to eat a salad because I’m on a diet.',
        seconddesc1:
            'This is usually said when someone is trying to lose weight or be “super healthy.” First, to lose weight, it is widely understood that we must burn more calories than we eat. Thus, we try to minimize our calories to lose the weight. Second, people think that if they eliminate all “processed foods,” they will automatically become healthy. The idea behind salads is that they’re “healthy,” “low-calorie,” and blah blah blah.',
        seconddesc2:
            'Guess what? Salads can quickly turn into a high-calorie snack or meal and become full of unhealthy saturated fats and sodium. For example, let’s look at the Southwest Avocado Chicken Salad from Wendy’s. Sounds healthy, right? They even market this salad as healthy. A full salad has 530 calories with 34 grams of fat, only 15 grams of carbs, 43 grams of protein, and 1060mg of sodium. First off, that’s not a big salad for all those calories—which will make maintaining a caloric deficit (for weight loss) difficult. Finding foods that can be eaten in large volumes for lower calories tends to help satiety during weight loss attempts. Also, 34 grams of fat is a lot for one meal. The RDA for a full day is 44–77 grams for someone eating 2,000 calories. Now look at the sodium: 1060 mg of sodium is close to half of the RDA for sodium. Yikes. Hey, at least the salad has protein. They got that part right.',
        thriedtitle: 'I am going to eat a salad to clean my pipes.',
        thrieddesc1:
            'Fiber does wonderful things. There are two types of fiber: soluble and insoluble. Soluble fiber is found in oats, beans, peas, berries, apples, plums, and sweet potatoes—all of which can be found in salads. This type of fiber helps absorb water, which adds bulk to stools. There is also insoluble fiber, which helps to get things moving in the GI system, thus helping to relieve constipation. Insoluble fiber is typically found in whole grains, the skins of fruit, skins of beans, seeds, spinach, carrots, cucumbers, lettuce, celery, zucchini, and tomatoes. These foods are even more common in salads, which gives you a hint as to why having a bowel movement after eating salad is not uncommon.',
        thrieddesc2:
            'Fruits and vegetables, particularly lettuce, have high water content. It’s no secret that water assists in the digestion process. In this case, fiber works best when it absorbs water. This makes your stool soft and bulky.',
        userId: 1,
    },
    {
        maintitle: 'Pump Up the Produce Power in Winter Meals',
        writer: 'by Lindsay Hehman, on Feb 25, 2020 3:54:23 PM',
        articles:
            'We’ve all been here before: When it seems the long, gray winter will never end and you make one more pot of hearty vegetable soup or another casserole; or when the lackluster tomatoes and almost pinkish-white strawberries just aren’t cutting it. It’s time to get creative! As a Hoosier native myself, I long for the tastes of summer more often than not, especially this time of year. What are some ways to get more variety into your diet in late winter? Look no further: we’ve got some ideas to tide you over until you can get your hands on some summertime Indiana-grown treasures!',
        image: postImage2,
        secondtitle: 'Breakfast',
        seconddesc1:
            'It’s smoothie time! Smoothies are fantastic because they are nutritional powerhouses, can disguise fruits and vegetables that you might be on the fence about, and never require a recipe. To keep it simple, use frozen-fruit mixtures and rinse out your blender as soon as you are done to avoid having to scrub off dried-on fruit fibers later.',
        seconddesc2:
            'A basic guide on where to start: Combine 1 cup of frozen fruit with about ¾ cup liquid (I personally love vanilla-flavored soy milk). Optional add-ins could include a handful of kale or spinach (what better way to hide those greens than a sweet smoothie?), a spoonful or two or chia seed or ground flaxseed, a little peanut butter or almond butter, rolled oats, or even a banana to add a little extra creaminess. Top with a drizzle of honey or a little granola.',
        thriedtitle: 'Lunch',
        thrieddesc1:
            'A light and citrusy dressing is a refreshing way to beat the winter blues! A favorite dressing in my house is this orange tahini dressing. It tastes delicious on any leafy green, so if you aren’t a fan of kale, just top your spinach or romaine lettuce with it instead. Whisk together the following ingredients in a bowl',
        thrieddesc2:
            'Massage dressing into kale and top with chopped apple, grapefruit (peeled and sliced), and pepitas or nuts of your choice (walnuts are my go-to).',
        userId: 2,
    },
    {
        maintitle: 'Vitamin C: How Much and Which Sources Are Best for Boosting Immunity?',
        writer: 'by Lindsey Hehman, on Mar 17, 2020 1:32:25 PM',
        articles:
            'During cold and flu season, we try to do all we can to prevent illness or speed up how fast we recover from illness. One such strategy many employ is the use of Vitamin C for a natural remedy. Several products are marketed as immune system boosters because they contain large amounts of Vitamin C. Do these products really work? We set out to investigate!',
        image: postImage3,
        secondtitle: 'What Vitamin C Can Do for You',
        seconddesc1:
            'Vitamin C, also called ascorbic acid, is not made by our bodies. We must take in this vitamin in our diet. It is needed for not only immune function but also for these uses: Form collagen (skin, tendons, ligaments, and blood vessels), Repair and maintain bones and teeth, Heal wounds and form scar tissue, Aid in iron absorption, It can also help prevent cancer as an antioxidant by blocking damage that we are exposed to from air pollution, cigarettes, and UV rays from the sun.',
        seconddesc2:
            'Vitamin C deficiency is extremely rare today, but in the mid-1700s scurvy in sailors was very prevalent. Those at risk of low vitamin C intake are smokers, those with medical conditions that affect absorption (cancer cachexia), and individuals with little variety in their diets.',
        thriedtitle: 'How Much Vitamin C Do You Need?',
        thrieddesc1:
            'The recommended Dietary Allowance for men is 90 milligrams per day and 75 milligrams per day for women. Fruits and veggies are the best source of vitamin C—especially citrus fruits. It can be destroyed by heat, so cooking slightly reduces your intake. However, most of our best sources of vitamin C are consumed raw naturally, and we usually do not have to worry about this. To get a better idea of how to meet your daily requirement with food, here are the vitamin C contents of some common fruits and vegetables that are good sources: Red bell pepper (½ cup, raw): 95mg, Orange, 1 medium: 70mg, Green bell pepper, ½ cup raw: 60mg, Broccoli, ½ cup cooked: 51mg, Cantaloupe, ½ cup: 29mg',
        thrieddesc2:
            'In the 1970s, research was released that suggested Vitamin C could successfully treat or prevent the common cold. Several studies since then have been inconsistent and have resulted in some confusion and controversy. To date, the most compelling evidence comes from a 2007 study that showed preventative treatment in the general population did not affect cold duration or symptom severity. However, in the trials involving marathon runners, skiers, and soldiers exposed to extreme physical exercise or cold environments daily as well as the elderly and smokers, there could be somewhat of a beneficial effect. It was concluded that taking Vitamin C after the onset of illness did not appear to be beneficial. Furthermore, at doses above 400mg, Vitamin C is excreted in the urine. A daily dose in the 1000–2000mg range can cause upset stomach and diarrhea.',
        userId: 3,
    }])
    let blogNeed
    if (blogId) {
        blogNeed = getPost.find(blog => blog.userId === blogId)
    }
    else {
        blogNeed = getPost.find(blog => blog.userId === 1)
    }

    const getStyle = (header, footer, post, none, blur) => {
        header.style = none || blur
        footer.style = none || blur
        post.style = none || blur
    }

    const changeshowForm = (e) => {
        const header = document.getElementById('header')
        const footer = document.getElementById('footer')
        const post = document.getElementById('post')
        const blur = 'filter: blur(2px)'
        const none = 'filter: none'
        if (showForm) {
            e.preventDefault()
            setshowForm(false)
            getStyle(header, footer, post, none)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        } else {
            setshowForm(true)
            getStyle(header, footer, post, '', blur)
            window.scrollTo({
                top: 500,
                behavior: 'smooth',
            })
        }
    }
    const handleSubmit = (e) => {
        const header = document.getElementById('header')
        const footer = document.getElementById('footer')
        const post = document.getElementById('post')
        const none = 'filter: none'
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
        var valid = re.test(valueInput)
        if (valid) {
            if (stateChecked) {
                e.preventDefault()
                alert('Письмо отправлено на почту ' + valueInput)
                setshowForm(false)
                getStyle(header, footer, post, none)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            } else {
                e.preventDefault()
                alert('Для продолжения необхоимо согласиться с политикой сайта')
            }
        } else {
            alert('Для продолжения введите email')
            e.preventDefault()
        }
    }

    const handleChange = (e) => {
        setvalueInput(e.target.value)
    }

    return (
        <div>
            <Link to='/blog/1'>1 блог</Link>
            <Link to='/blog/2'>2 блог</Link>
            <Link to='/blog/3'>3 блог</Link>
            <Post blogNeed={blogNeed} showForm={showForm} setstateChecked={setstateChecked} changeshowForm={changeshowForm} handleSubmit={handleSubmit} handleChange={handleChange}></Post>
        </div>
    )
}

export default PostApi;
