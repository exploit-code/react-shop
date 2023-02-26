import './Categories.scss';
import {Link} from "react-router-dom";

import freshfruitIcon from '../../images/freshfruitIcon.svg';
import driedfruitIcon from '../../images/driedfruitIcon.svg';
import vegetablesIcon from '../../images/vegetablesIcon.svg';
import drinkfruitsIcon from '../../images/drinkfruitsIcon.svg';

const Categories = () => {

    const categories = [{desc: 'FRESH FRUIT', img: freshfruitIcon, path: "/products/15", id: 0},
        {desc: 'DRIED FRUIT', img: driedfruitIcon, path: "/products/2", id: 1},
        {desc: 'VEGETABLES', img: vegetablesIcon, path: "/products/3", id: 2},
        {desc: 'DRINK FRUITS', img: drinkfruitsIcon, path: "/products/4", id: 3}];

    const listFruits = categories.map((fruit) =>
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
            <div className='bannermainpage__bottom'>
                {listFruits}
            </div>
        </div>
    )
}

export default Categories;
