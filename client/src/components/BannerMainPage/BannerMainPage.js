import './BannerMainPage.scss';
import poster from '../../images/poster.svg';
import freshfruitIcon from '../../images/freshfruitIcon.svg';
import driedfruitIcon from '../../images/driedfruitIcon.svg';
import vegetablesIcon from '../../images/vegetablesIcon.svg';
import drinkfruitsIcon from '../../images/drinkfruitsIcon.svg';





const BannerMainPage = (props) => {
    const categories = ['Fresh Meat',
        'Vegetables',
        'Fruit & Nut Gifts',
        'Fresh Berries',
        'Ocean Foods',
        'Butter & Eggs',
        'Fastfood',
        'Fresh Onion',
        'Papayaya & Crisps',
        'Oatmeal',
        'Fresh Bananas'];
    const listCategories = categories.map((categorie) =>
        <a href='*' className='bannermainpage__top_list_a'>{categorie}</a>
    );

    const fruits = [{ desc: 'FRESH FRUIT', img: freshfruitIcon }, { desc: 'DRIED FRUIT', img: driedfruitIcon }, { desc: 'VEGETABLES', img: vegetablesIcon }, { desc: 'DRINK FRUITS', img: drinkfruitsIcon }];
    const listFruits = fruits.map((fruit) =>
        <div className='bannermainpage__bottom_fruit'>
            <img src={fruit.img} alt='fruit'></img>
            <button className='bannermainpage__bottom_fruit_button'>{fruit.desc}</button>
        </div>
    );

    return (
        <div className='bannermainpage'>
            <div className='bannermainpage__top'>
                <div className='bannermainpage__top_list' style={{ display: props.stateCategories ? 'flex' : 'none' }}>
                    {listCategories}
                </div>
                <div className='bannermainpage__top_poster'>
                    <div className='bannermainpage__top_poster_left'>
                        <p className='bannermainpage__top_poster_left_p_ff'>FRUIT FRESH</p>
                        <p className='bannermainpage__top_poster_left_h1'>Vegetable <br></br>100% Organic</p>
                        <p className='bannermainpage__top_poster_left_p_free'>Free Pickup and Delivery Available</p>
                        <button className='bannermainpage__top_poster_left_button'>SHOP NOW</button>
                    </div>
                    <div className='bannermainpage__top_poster_right'>
                        <img src={poster} alt='poster'></img>
                    </div>
                </div>
            </div>
            <div className='bannermainpage__bottom'>
                {listFruits}
            </div>
        </div>
    )
}

export default BannerMainPage;