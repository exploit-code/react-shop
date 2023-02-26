import './UpMainPage.scss';
import { useState } from 'react';
import menuIcon from '../../images/menuIcon.svg';
import callIcon from '../../images/callIcon.svg';
import BannerMainPage from '../BannerMainPage/BannerMainPage.js';
import freshfruitIcon from '../../images/freshfruitIcon.svg';
import driedfruitIcon from '../../images/driedfruitIcon.svg';
import vegetablesIcon from '../../images/vegetablesIcon.svg';
import drinkfruitsIcon from '../../images/drinkfruitsIcon.svg';
import { Link } from "react-router-dom";




const UpMainPage = () => {
    const [numberfavor, setNumberFavor] = useState(5)
    const [stateCategories, setstateCategories] = useState(false)
    const [nameCategories, setnameCategories] = useState('All Categories')

    const categoriesClick = () => {
        setnameCategories('All Categories')
        if (stateCategories) {
            setstateCategories(false)
        }
        else {
            setstateCategories(true)
        }
    }

    const handler = (id) => {
        setnameCategories(categories[id].name)
    }

    const categories = [{ name: 'Fresh Meat', id: 0 },
    { name: 'Vegetables', id: 1 },
    { name: 'Fruit & Nut Gifts', id: 2 },
    { name: 'Fresh Berries', id: 3 },
    { name: 'Ocean Foods', id: 4 },
    { name: 'Butter & Eggs', id: 5 },
    { name: 'Fastfood', id: 6 },
    { name: 'Fresh Onion', id: 7 },
    { name: 'Papayaya & Crisps', id: 8 },
    { name: 'Oatmeal', id: 9 },
    { name: 'Fresh Bananas', id: 10 }];
    const listCategories = categories.map((categorie) =>
        <Link onClick={() => handler(categorie.id)} key={categorie.id} className='bannermainpage__top_list_a'>{categorie.name}</Link>
    );

    const fruits = [{ desc: 'FRESH FRUIT', img: freshfruitIcon, path: "/products/15", id: 0 },
    { desc: 'DRIED FRUIT', img: driedfruitIcon, path: "/products/2", id: 1 },
    { desc: 'VEGETABLES', img: vegetablesIcon, path: "/products/3", id: 2 },
    { desc: 'DRINK FRUITS', img: drinkfruitsIcon, path: "/products/4", id: 3 }];
    const listFruits = fruits.map((fruit) =>
        <Link key={fruit.id} className="link" to={fruit.path}>
            <div className='bannermainpage__bottom_fruit'>
                <img src={fruit.img} className='bannermainpage__bottom_fruit_img' alt='fruit'></img>
                <button className='bannermainpage__bottom_fruit_button'>
                    {fruit.desc}
                </button>
            </div>
        </Link>
    );
    return (
        <div>
            <div className='upmainpage'>
                <div className='upmainpage__left'>
                    <div className='upmainpage__left_search'>
                        <div className='upmainpage__left_depart' onClick={categoriesClick}> <img src={menuIcon} alt='menu'></img>{nameCategories}</div>
                        <input className='upmainpage__left_search_input' placeholder='What do you need?' />
                        <button className='upmainpage__left_search_button'>SEARCH</button>
                    </div>
                </div>
                <div className='upmainpage__right'>
                    <div className='upmainpage__right_info'>
                        <img src={callIcon} alt='call'></img>
                        <div className='upmainpage__right_info_number'>
                            <span className='upmainpage__right_info_number_span'>+65 11.188.888</span>
                            <p className='upmainpage__right_info_number_p'>support 24/7 time</p>
                        </div>
                    </div>
                </div>
            </div>
            <BannerMainPage stateCategories={stateCategories} listFruits={listFruits} listCategories={listCategories} />
        </div >
    )
}

export default UpMainPage;
