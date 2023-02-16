import './UpMainPage.scss';
import menuIcon from '../../images/menuIcon.svg';
import callIcon from '../../images/callIcon.svg';




const UpMainPage = (props) => {
    return (
        <div>
            <div className='upmainpage'>
                <div className='upmainpage__column_left_depart' onClick={props.categoriesClick}> <img src={menuIcon} alt='menu'></img>All Department</div>
                <div className='upmainpage__column_center'>
                    <div className='upmainpage__column_center_search'>
                        <select className='upmainpage__column_center_search_select'>
                            <option value="">All Categories</option>
                        </select>
                        <div className='upmainpage__column_center_search_stick'></div>
                        <input className='upmainpage__column_center_search_input' placeholder='What do you need?' />
                        <button className='upmainpage__column_center_search_button'>SEARCH</button>
                    </div>
                </div>
                <div className='upmainpage__column_right'>
                    <div className='upmainpage__column_right_info'>
                        <img src={callIcon} alt='call'></img>
                        <div className='upmainpage__column_right_info_number'>
                            <span className='upmainpage__column_right_info_number_span'>+65 11.188.888</span>
                            <p className='upmainpage__column_right_info_number_p'>support 24/7 time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UpMainPage;