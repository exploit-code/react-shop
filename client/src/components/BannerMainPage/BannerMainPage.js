import './BannerMainPage.scss';
import poster from '../../images/poster.svg';

const BannerMainPage = (props) => {
    return (
        <div className='bannermainpage'>
            <div className='bannermainpage__top'>
                <div className='bannermainpage__top_list' style={{display: props.stateCategories ? 'flex' : 'none'}}>
                    {props.listCategories}
                </div>
                <div className='bannermainpage__top_poster'>
                    <div className='bannermainpage__top_poster_left'>
                        <p className='bannermainpage__top_poster_left_p_ff'>FRUIT FRESH</p>
                        <p className='bannermainpage__top_poster_left_h1'>Vegetable <br></br>100% Organic</p>
                        <p className='bannermainpage__top_poster_left_p_free'>Free Pickup and Delivery Available</p>
                    </div>
                    <div className='bannermainpage__top_poster_right'>
                        <img className='bannermainpage__top_poster_right_img' src={poster} alt='poster'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerMainPage;
