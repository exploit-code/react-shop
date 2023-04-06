import './BannerMainPage.scss';
import poster from '../../images/poster.svg';

const BannerMainPage = () => {
    return (
        <div className='bannermainpage'>
            <div className='bannermainpage__top'>
                <div className='bannermainpage__top_poster'>
                    <div className='bannermainpage__top_poster_left'>
                        <p className='bannermainpage__top_poster_left_p_ff'>&#128515; &#128515; &#128515;</p>
                        <p className='bannermainpage__top_poster_left_h1'>Yeahhhhh!  <br></br>Good-Team!</p>
                        <p className='bannermainpage__top_poster_left_p_free'>Vsem spasibo!  We did it!!!!👏👏👏</p>
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
