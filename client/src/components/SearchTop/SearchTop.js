import './SearchTop.scss';
import { useState } from 'react';
import menuIcon from '../../images/menuIcon.svg';
import callIcon from '../../images/callIcon.svg';

import { Link } from "react-router-dom";

const SearchTop = () => {
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

    const listCategories = categories.map((item) =>
        <Link onClick={() => handler(item.id)} key={item.id} className='bannermainpage__top_list_a'>{item.name}</Link>
    );
    return (
        <div>
            <div className='upmainpage' id='upmainpage'>
                <div className='upmainpage__left'>
                    <div className='upmainpage__left_search'>
                        <div className='upmainpage__left_depart' id='depart' onClick={categoriesClick}>
                            <img src={menuIcon} alt='menu'>
                            </img>
                            {nameCategories}
                        </div>
                        <input className='upmainpage__left_search_input' placeholder='What do you need?' id='search' />
                        <button className='upmainpage__left_search_button' id='searchButton'>SEARCH</button>
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
            <div className='bannermainpage__top_list' style={{ display: stateCategories ? 'flex' : 'none' }}>
                {listCategories}
            </div>
        </div >
    )
}

export default SearchTop;
