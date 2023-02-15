import './UpMainPage.scss';
import { useState } from 'react';
import menuIcon from '../../images/menuIcon.svg';
import heartIcon from '../../images/heartIcon.svg';
import cartIcon from '../../images/cartIcon.svg';
import callIcon from '../../images/callIcon.svg';
import BannerMainPage from '../BannerMainPage/BannerMainPage.js';
import { Link } from 'react-router-dom';




// const UpMainPage = () => {
//     const [numberfavor, setNumberFavor] = useState(5)
//     const [stateCategories, setstateCategories] = useState(false)

//     const categoriesClick = () => {
//         if (stateCategories) {
//             setstateCategories(false)
//         }
//         else {
//             setstateCategories(true)
//         }
//     }
//     return (
//         <div>
//             <div className='upmainpage'>
//                 <div className='upmainpage__column_left'>
//                     <p className='upmainpage__column_left_logo'>LOGO🍎🥝</p>
//                     <div className='upmainpage__column_left_depart' onClick={categoriesClick}> <img src={menuIcon} alt='menu'></img>All Department</div>
//                 </div>
//                 <div className='upmainpage__column_center'>
//                     <div className='upmainpage__column_center_routing'>
//                         <Link href='*' className='upmainpage__column_center_routing_link' to='/'>HOME</Link>
//                         <a href='*' className='upmainpage__column_center_routing_link'>SHOP</a>
//                         <a href='*' className='upmainpage__column_center_routing_link'>PAGES</a>
//                         <a href='*' className='upmainpage__column_center_routing_link'>BLOG</a>
//                         <a href='*' className='upmainpage__column_center_routing_link'>CONTACT</a>
//                     </div>
//                     <div className='upmainpage__column_center_search'>
//                         <select className='upmainpage__column_center_search_select'>
//                             <option value="">All Categories</option>
//                         </select>
//                         <div className='upmainpage__column_center_search_stick'></div>
//                         <input className='upmainpage__column_center_search_input' placeholder='What do you need?' />
//                         <button className='upmainpage__column_center_search_button'>SEARCH</button>
//                     </div>
//                 </div>
//                 <div className='upmainpage__column_right'>
//                     <div className='upmainpage__column_right_favoritems'>
//                         <div className='upmainpage__column_right_favoritems_heart'>
//                             <img src={heartIcon} alt='heart'></img>
//                             <div className='upmainpage__column_right_favoritems_circle'>{numberfavor + 2}</div>
//                         </div>
//                         <Link className='upmainpage__column_right_favoritems_cart' to='/basket'>
//                             <img src={cartIcon} alt='cart'></img>
//                             <div className='upmainpage__column_right_favoritems_circle'>{numberfavor}</div>
//                         </Link>
//                         <p className='upmainpage__column_right_favoritems_p'>item: <span className='upmainpage__column_right_favoritems_span'>$150.00</span></p>
//                     </div>
//                     <div className='upmainpage__column_right_info'>
//                         <img src={callIcon} alt='call'></img>
//                         <div className='upmainpage__column_right_info_number'>
//                             <span className='upmainpage__column_right_info_number_span'>+65 11.188.888</span>
//                             <p className='upmainpage__column_right_info_number_p'>support 24/7 time</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <BannerMainPage stateCategories={stateCategories} />
//         </div >
//     )
// }

// export default UpMainPage;