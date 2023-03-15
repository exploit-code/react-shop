import { useState } from "react";
import SearchTop from "../../components/SearchTop/SearchTop";
import postImage1 from '../../images/postImage1.svg'
import postImage2 from '../../images/postImage2.jpg'
import postImage3 from '../../images/postImage3.jpg'
import postImage4 from '../../images/postImage4.jpg'
import postImage5 from '../../images/postImage5.jpg'
import postImage6 from '../../images/postImage6.jpg'
import './Post.scss'
import Like from '../../components/Like/Like'
import { Link, useParams } from "react-router-dom";
import Post from "./Post";

const PostApi = () => {
    const [showForm, setshowForm] = useState()
    const [stateChecked, setstateChecked] = useState(false)
    const [valueInput, setvalueInput] = useState()
    const blogId = parseInt(useParams().id);

    const [getPost, setgetPost] = useState([
        {
            img1: postImage1,
            img2: postImage2,
            img3: postImage3,
            img4: postImage4,
            img5: postImage5,
            img6: postImage6,
            title1: 'Busting Salad Myths: Eat a Well-Built Salad (If You Want To)',
            title2: 'Pump Up the Produce Power in Winter Meals',
            title3: 'Vitamin C: How Much and Which Sources Are Best for Boosting Immunity?',
            title4: 'Are You Eating Too Much Sodium?',
            title5: 'Make Plans to Stay Healthy',
            title6: 'Tips for a Healthy Halloween',
            userId: 'blogmainpage',
        },
        {
            maintitle: 'Busting Salad Myths: Eat a Well-Built Salad (If You Want To)',
            writer: 'by Sabrina Goshen, on Dec 1, 2020 12:49:12 PM',
            articles:
                'Come on. Weve all heard this before —from friends, from coworkers, and possibly from our own mouths. I swear, salads are easily the most famous “diet food.” Why is that? Do we really have to eat salads to lose weight, clean out our “pipes,” or be healthy? In this blog I break down each of these claims and then talk about ways to improve your veggie game!',
            image: postImage1,
            secondtitle: '“I am going to eat a salad because I’m on a diet.”',
            seconddesc1:
                'This is usually said when someone is trying to lose weight or be “super healthy.” First, to lose weight, it is widely understood that we must burn more calories than we eat. Thus, we try to minimize our calories to lose the weight. Second, people think that if they eliminate all “processed foods,” they will automatically become healthy. The idea behind salads is that they’re “healthy,” “low-calorie,” and blah blah blah. Guess what? Salads can quickly turn into a high-calorie snack or meal and become full of unhealthy saturated fats and sodium. For example, let’s look at the Southwest Avocado Chicken Salad from Wendy’s. Sounds healthy, right? They even market this salad as healthy. A full salad has 530 calories with 34 grams of fat, only 15 grams of carbs, 43 grams of protein, and 1060mg of sodium. First off, that’s not a big salad for all those calories—which will make maintaining a caloric deficit (for weight loss) difficult. Finding foods that can be eaten in large volumes for lower calories tends to help satiety during weight loss attempts. Also, 34 grams of fat is a lot for one meal. The RDA for a full day is 44–77 grams for someone eating 2,000 calories. Now look at the sodium: 1060 mg of sodium is close to half of the RDA for sodium. Yikes. Hey, at least the salad has protein. They got that part right.',
            seconddesc2:
                'In addition, health is not just about physical well-being. Salads, if built correctly, can most certainly offer physical benefits. But health includes mental and social well-being too. Think for a moment. Does the salad taste good? Am I satisfied? Can I keep this up forever? Am I happy with this? If the answer is “no,” consider a different approach. Any change you make should be one that is sustainable for life. In the midst of making these changes, you must evaluate your physical, mental, and social health at all times. How can you improve one part of well-being without sacrificing another? Finding that balance is the key to SUSTAINABLE, healthful lifestyle changes, which ultimately leads to lifelong results.',
            thirdtitle: '“I am going to eat a salad to clean my pipes.”',
            thirddesc1:
                'Fiber does wonderful things. There are two types of fiber: soluble and insoluble. Soluble fiber is found in oats, beans, peas, berries, apples, plums, and sweet potatoes—all of which can be found in salads. This type of fiber helps absorb water, which adds bulk to stools. There is also insoluble fiber, which helps to get things moving in the GI system, thus helping to relieve constipation. Insoluble fiber is typically found in whole grains, the skins of fruit, skins of beans, seeds, spinach, carrots, cucumbers, lettuce, celery, zucchini, and tomatoes. These foods are even more common in salads, which gives you a hint as to why having a bowel movement after eating salad is not uncommon.',
            thirddesc2:
                'Fruits and vegetables, particularly lettuce, have high water content. It’s no secret that water assists in the digestion process. In this case, fiber works best when it absorbs water. This makes your stool soft and bulky. Vegetables can be super boring. Finding new ways to enjoy veggies can be a challenge. However, there are ways to eat veggies without having to eat a salad. Raw veggies with dip, grilled, steamed, and roasted are all ways to have veggies. Do not skimp on the spices and seasonings, such as garlic powder, onion powder, cumin, Italian seasoning, and ginger. I promise that makes the veggies taste 100,000 times better.',
            fourthtitle: '“I am going to eat a salad because that’s the only way I know how to eat my veggies.”',
            fourthdesc: 'This is valid. Vegetables can be super boring. Finding new ways to enjoy veggies can be a challenge. However, there are ways to eat veggies without having to eat a salad. Raw veggies with dip, grilled, steamed, and roasted are all ways to have veggies. Do not skimp on the spices and seasonings, such as garlic powder, onion powder, cumin, Italian seasoning, and ginger. I promise that makes the veggies taste 100,000 times better. ottom line: You do not need a salad to be healthy, lose weight, or clean your pipes. If you like salads, eat them! But be careful of the added fats that tend to sneak into salads. If you do not like salads, find another way to eat your vegetables. Roasted, steamed, raw, and grilled are all yummy ways to eat veggies. Check out my recipe page for more ways to cook veggies. Remember, it’s important to like and enjoy the foods you eat.',
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
            thirdtitle: 'Lunch',
            thirddesc1:
                'A light and citrusy dressing is a refreshing way to beat the winter blues! A favorite dressing in my house is this orange tahini dressing. It tastes delicious on any leafy green, so if you aren’t a fan of kale, just top your spinach or romaine lettuce with it instead. Whisk together the following ingredients in a bowl',
            thirddesc2:
                'Massage dressing into kale and top with chopped apple, grapefruit (peeled and sliced), and pepitas or nuts of your choice (walnuts are my go-to). I’m not sure about you, but if something requires a recipe, there’s a big chance I might never get around to making a dish—we all have our reasons, right? Roasted cauliflower and chickpea tacos are one entrée that requires no real recipe to follow. Trust me, it would be really hard to mess this one up, even if you consider yourself a novice in the kitchen!',
            fourthtitle: 'Dinner',
            fourthdesc: 'I’m not sure about you, but if something requires a recipe, there’s a big chance I might never get around to making a dish—we all have our reasons, right? Roasted cauliflower and chickpea tacos are one entrée that requires no real recipe to follow. Trust me, it would be really hard to mess this one up, even if you consider yourself a novice in the kitchen! Toss chickpeas (from a can!) and chopped cauliflower on a baking sheet with a little olive oil and a variety of spices like chili powder, cumin, garlic powder, onion powder, and salt. Roast in the oven at 400 degrees until chickpeas are crisp and cauliflower is tender (about 30 minutes). Take a corn tortilla and place cauliflower and chickpeas on top. Top with chopped cabbage, jalapeño (if you like spice!), avocado/guacamole, and cilantro. Drizzle with lime juice. Sour cream and cheese are optional. This recipe will deliver that healthy and refreshing dinner entrée you’ve been longing for since Thanksgiving!',
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
            thirdtitle: 'How Much Vitamin C Do You Need?',
            thirddesc1:
                'The recommended Dietary Allowance for men is 90 milligrams per day and 75 milligrams per day for women. Fruits and veggies are the best source of vitamin C—especially citrus fruits. It can be destroyed by heat, so cooking slightly reduces your intake. However, most of our best sources of vitamin C are consumed raw naturally, and we usually do not have to worry about this. To get a better idea of how to meet your daily requirement with food, here are the vitamin C contents of some common fruits and vegetables that are good sources: Red bell pepper (½ cup, raw): 95mg, Orange, 1 medium: 70mg, Green bell pepper, ½ cup raw: 60mg, Broccoli, ½ cup cooked: 51mg, Cantaloupe, ½ cup: 29mg',
            thirddesc2:
                'In the 1970s, research was released that suggested Vitamin C could successfully treat or prevent the common cold. Several studies since then have been inconsistent and have resulted in some confusion and controversy. To date, the most compelling evidence comes from a 2007 study that showed preventative treatment in the general population did not affect cold duration or symptom severity. However, in the trials involving marathon runners, skiers, and soldiers exposed to extreme physical exercise or cold environments daily as well as the elderly and smokers, there could be somewhat of a beneficial effect. It was concluded that taking Vitamin C after the onset of illness did not appear to be beneficial. Furthermore, at doses above 400mg, Vitamin C is excreted in the urine. A daily dose in the 1000–2000mg range can cause upset stomach and diarrhea.',
            fourthtitle: 'Can Vitamin C Treat or Prevent the Common Cold?',
            fourthdesc: 'In the 1970s, research was released that suggested Vitamin C could successfully treat or prevent the common cold. Several studies since then have been inconsistent and have resulted in some confusion and controversy. To date, the most compelling evidence comes from a 2007 study that showed preventative treatment in the general population did not affect cold duration or symptom severity. However, in the trials involving marathon runners, skiers, and soldiers exposed to extreme physical exercise or cold environments daily as well as the elderly and smokers, there could be somewhat of a beneficial effect. It was concluded that taking Vitamin C after the onset of illness did not appear to be beneficial. Furthermore, at doses above 400mg, Vitamin C is excreted in the urine. A daily dose in the 1000–2000mg range can cause upset stomach and diarrhea. If you want the benefits of Vitamin C, it is best to consume the recommended Dietary Allowance daily, before the start of symptoms. Ideally, you will get Vitamin C from your food instead of a supplement; you will also get several other important nutrients in addition to your Vitamin C. Remember to make half of your plate fruits and veggies at every meal or blend up a quick smoothie for an easy on-the-go snack, slice up peppers and dip in hummus, or ask for extra veggies on that sandwich, pizza, or salad',
            userId: 3,
        },
        {
            maintitle: 'Are You Eating Too Much Sodium?',
            writer: 'by Lindsey Recker, on Jan 20, 2022 3:38:13 PM',
            articles:
                'Sodium is a mineral and electrolyte that helps balance the amount of fluid and other minerals in your body. It also plays an important role in nerve and muscle function. The terms “sodium” and “salt” are typically used interchangeably; however, sodium is a mineral and one of the chemical components found in salt (also called sodium chloride). Sodium is found naturally in some foods, and added to others for flavor or preservation.',
            image: postImage4,
            secondtitle: 'Where Is Sodium Found in Foods?',
            seconddesc1:
                'Although most people believe their sodium intake mainly comes from salt they add to food by hand, only around 10% of the average American’s sodium intake comes from salt added while cooking or eating. Instead, more than 70% of the sodium consumed by Americans is from packaged and processed foods and food from restaurants. According to the Dietary Guidelines for Americans, the largest contributors of sodium in the American diet include sandwiches (including burgers and tacos), pasta and other grain dishes, soups, pizzas, and meat and seafood dishes.',
            seconddesc2:
                'The American Heart Association recommends consuming no more than 2,300mg (1 teaspoon) of sodium per day; however, consuming less than 1,500mg is preferred, especially in those with preexisting high blood pressure. Despite these guidelines, the average adult in the U.S. consumes close to 3,400mg of sodium each day.',
            thirdtitle: 'How Can I Reduce My Sodium Intake?',
            thirddesc1:
                'To help reduce your sodium intake and promote overall health, try some of the following suggestions: Compare Nutrition Facts labels of various packaged foods and choose the one with the lowest sodium content. Select canned foods, such as vegetables and beans, with “no salt added” or “low sodium” listed on the label. Use herbs, spices, and other sodium-free seasonings to add flavor to food, rather than salt and salty seasoning blends. Limit foods that are pickled, cured, or smoked, as these tend to be high in sodium. Foods that are grilled, poached, or roasted may be better options. Choose whole, unprocessed foods such as fruits, vegetables, and whole grains. These foods tend to be very low in sodium. Minimize the amount of salt added during cooking and at the table. If you currently eat a lot of salt/sodium, try gradually reducing your intake to give your taste buds time to transition.',
            thirddesc2:
                'IWhile some sodium is necessary for the body to function (~500 mg/day), over time consuming too much sodium can have undesirable health effects. One of the most notable consequences of consuming too much sodium is high blood pressure. High blood pressure can increase your risk of heart disease and stroke, the two leading causes of death in the U.S., as well as kidney disease, loss of vision, and many more health complications.',
            fourthtitle: 'Sodium and Exercise',
            fourthdesc: 'The recommendation to consume less than 1,500mg per day does not apply to everyone, particularly individuals who lose excess amounts of sweat, such as competitive athletes or outdoor construction workers. Sodium and potassium are the two major electrolytes lost in sweat, although the amount lost varies from person to person. Typically, it is appropriate to replenish these electrolytes after intense exercise (typically >60 minutes) or excessive sweat loss. When choosing electrolyte replacement drinks, select one with about 14–16g of carbohydrates and between 100 and 165mg of sodium per every 8 ounces for optimal recovery. And as always, it is important to talk with your physician or registered dietitian to determine how much sodium is appropriate for you based on your health status and other contributing factors.',
            userId: 4,
        },
        {
            maintitle: 'Make Plans to Stay Healthy During the Colder Months',
            writer: 'by David Behrmann, on Feb 7, 2023 12:56:29 PM',
            articles:
                'The New England Journal of Medicine published a study of adults showing that the average holiday weight gain was .37 kilograms, or just under a pound, and more than half the people in the study stayed within a kilogram, or just over two pounds, of their other weigh-ins. Now that the holidays are over, you can lose that weight and stay healthy during the long colder months. Here are five healthy habits to get started with.',
            image: postImage5,
            secondtitle: 'Do make a plan to manage your stress level',
            seconddesc1:
                'A good place to start is finding ways to ease stress and anxiety when they occur, or even before. That may mean doing yoga or meditation, taking a hot bath or shower, listening to music, or even just calling a friend to catch up.  Just 10 minutes of stress relief can help you feel more relaxed and make it less likely that you will turn to food. If you’re having trouble finding time to unwind, mark a daily 10-minute stress break on your calendar and tag it with an alert—then treat it like you would an important appointment and don’t miss it.',
            seconddesc2:
                'Some people skip meals to “save up” calories for a big dinner or party, but this approach may backfire and lead to overeating later. Instead, limit your intake to an eight-hour window of time each day. This has been shown to be an effective weight-maintenance strategy. You can even try having a lighter breakfast and lunch at your usual times, making sure they incorporate a lot of vegetables and proteins with minimal carbs. For example, you might have a cup of Greek yogurt for breakfast, a green salad with grilled chicken and light dressing for lunch, and then let yourself enjoy the evening feast.',
            thirdtitle: 'Do eat your foods in a specific order',
            thirddesc1:
                'It helps to have a plate of salad or vegetables before anything else. These low-calorie and high-fiber foods will help you fill up before you dive into the higher-calorie options. Next, have some type of lean protein. If you are going to have carbs (such as potatoes, chips, rice, pasta, bread, or a sweet dessert), save them for the end of your meal. By then, you’ll be less hungry and the protein you’ve eaten will slow your digestion a bit, so you’ll feel full for longer afterward.',
            thirddesc2:
                'An easy way to cut calories is to avoid drinks like regular soda, juice, coffee drinks with added sugar, and alcoholic beverages. Also, try to aim for six to eight glasses of water per day. If you do decide to drink alcohol, choose spirits mixed with something without added sugar, such as seltzer or diet tonic water, rather than beer, wine, or mixed drinks. Or stick to a drink that has only about 100 calories per serving. Do keep in mind that alcohol can lower inhibitions and make you more likely to indulge, so limit yourself to one or two drinks, and have a glass of water after each one.',
            fourthtitle: 'Do give in to your cravings (somewhat)',
            fourthdesc: 'Controlling diet and weight is a balancing act. Completely cutting out dessert and sweets is simply unrealistic. This can lead to binging or eating more than you’d like to. If you are really craving your favorite sweet, let yourself have some. Remind yourself that this won’t be your last dessert ever and try to put the fork down after one slice—or a few bites, if you’re satisfied by that. Check back soon for the next 5 ideas (part 2) for how to stay healthy during these colder months.',
            userId: 5,
        },
        {
            maintitle: 'Tips for a Healthy Halloween',
            writer: 'by Sabrina Goshen, on Oct 31, 2022 8:15:00 AM',
            articles:
                'Halloween is a day full of fun, costumes, treats, friends, and family! With all the food and candy, is it even possible to be “healthy” and still enjoy the festivities? The answer is YES. Take a look at these SPOOK-tacular tips to keep you and your family in good health.',
            image: postImage6,
            secondtitle: 'Find a Balance',
            seconddesc1:
                'Halloween comes around once a year. It’s a time to feed your social and mental health, which may require easing up on the physical health guidelines for a moment. Remember, any decision you make for your physical health that comes at the expense of your social and mental health may not be all that great after all. Let’s be honest, Halloween is FUN. The candy is FUN. Trick-or-treating is FUN. All this feeds our mental and social health. Plus, think about it: daily nutritional choices consistently over time have the greater impact on your health than nutrition choices on one holiday. What does this “balance” look like? Keep reading.',
            seconddesc2:
                'All foods in moderation can fit into a healthy regimen. Instead of making candy off-limits, work it into your established routine. Still have breakfast, lunch, and dinner. Make those meals nutritious, including fruits, veggies, whole grains, and lean proteins. At each meal, offer one serving of Halloween candy to everyone. Instead of the full-size pieces, make them like the “fun-size” or “snack-size.” This allows everyone to enjoy a sweet, while filling up on the nutritious foods that are important for physical health.',
            thirdtitle: 'Make festive, healthy options.',
            thirddesc1:
                'On the day that you all go trick-or-treating, really get into the spirit! Make nutritious meals that are Halloween themed. Some examples include: Green-goop smoothie with Halloween straws: Include low-fat Greek yogurt, spinach, chia seeds, pineapple, and low-fat milk of choice. Try this recipe. Monster teeth: Slice a green apple. Smear peanut butter on one side of a slice (bottom lip of the mouth). Stick yogurt-covered raisins in the peanut butter. Smear a little more peanut butter on another apple slice and place on top of the raisins for the top lip. Boo-nana pops: Cut bananas in half and place a stick in the end as a handle. At the tip of the banana, add two chocolate chips as eyes. Serve frozen, cold, or at room temperature. Devil spiders: Make deviled eggs. On the top, put an olive in the center for the spider’s body. Then put slices of olives around the outer edge of the egg for the legs. Cute pumpkins: Peel Cuties/clementines/mandarins. Slice celery into small sticks. Place a celery stick at the top of each mandarin for the pumpkin stem. Yo-yo graveyard: Scoop nonfat Greek yogurt into cups. Crumble some chocolate cookies on top (just a thin layer to cover the top) for the dirt. Write “Boo” on graham crackers for tombstones. Place one tombstone in each yogurt cup. Spider sandwich: Make a sandwich of choice. Cut the sandwich into a circle. Place chocolate chips as the eyes (use peanut butter to help them stick). Use pretzels as the legs, sticking them into the bread or middle of the sandwich, with the tips sticking out. Ghost cheese sticks: Get individually wrapped mozzarella cheese sticks. Take a sharpie and make black dots for the eyes and a block dot for an open mouth. These make perfect snacks while you are out and about trick-or-treating.',
            thirddesc2:
                'This ensures everyone is filling up on nutritious options high in fiber and protein, which leaves less room for tons of candy. Now, do not mistake this for “NO ROOM” for candy. There is still room, but not as much. You are just making sure everyone is properly nourished and still having fun in the process. When you get home that night, enjoy a few pieces of candy with the kiddos, then put it in a non-accessible place. You are in control of when and how much the kids get. You are also in control of when and how much you get as well. Refer to what I said about portion control to plan your approach here. Remain consistent so that you and the kids both have a clear understanding of when candy will be served. For example, one individual piece will be served with each meal. It gives both you and the kids something to look forward to and does not make candy off-limits, but instead teaches proper portion control and provides a positive relationship with all foods. In the long run, this reduces binging or obsessing over any one food.',
            fourthtitle: 'Stay active.',
            fourthdesc: 'One of the best things you can do is to get everyone moving and active. Be sure to get in a workout on the big day, even if it is a quick 20-minute HIIT session at home, or try this spooky workout. Get the kiddos moving with you! Walk from house to house instead of driving during trick-or-treating. Go on a walk in your costumes if you are not trick-or-treating this year. Or just go on a walk in your regular clothes and enjoy all the house decorations. You can also play games: Monster Tag: The tagger is a monster and anyone they tag becomes the monster. Monster vs. Ghost Freeze Tag: If the monster tags you, you become frozen until one of your ghost teammates unfreezes you. The goal is for the monster to freeze all the ghosts! ENJOY HALLOWEEN! Have fun with your family. Soak in the moments. Laugh a lot. Feed your mental and social health, knowing it will benefit your physical health in the long run and that choices you make consistently over time matter the most. Stay safe.',
            userId: 6,
        }])
    let blogNeed
    if (blogId) {
        blogNeed = getPost.find(blog => blog.userId === blogId)
    }
    else {
        blogNeed = getPost.find(blog => blog.userId === 'blogmainpage')
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
            <Post blogId={blogId} blogNeed={blogNeed} showForm={showForm} setstateChecked={setstateChecked} changeshowForm={changeshowForm} handleSubmit={handleSubmit} handleChange={handleChange}></Post>
        </div>
    )
}

export default PostApi;
