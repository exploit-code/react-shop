import './catalog.scss';
// import '../../index.scss';
import banan from '../../images/banan.png';
import line from '../../images/line.png';

const Catalog = () => {

    return (
      <section className='catalog-container'>
        <div className='catalog-heading'>
          <b>Featured Product</b>
          <img src={line} alt='line' className='heading-line-img' />
          <div className='catalog-filter-btn'>
            <div className='filter-btn active'>All</div>
            <div className='filter-btn'>Oranges</div>
            <div className='filter-btn'>Freash Meat</div>
            <div className='filter-btn'>Vegetables</div>
            <div className='filter-btn'>Fastfood</div>
          </div>
        </div>
        <div className='catalog-item-box'>
          <a href='/product/12'>
            <div className='product-card'>
              <img src={banan} alt='banana' className='product-card-img' />
              <div className='text-box-roduct-card'>
                <p className='text-product-card'>Bunch of bananas</p>
                <b>
                  <p className='price-product-card'>$30.00</p>
                </b>
              </div>
            </div>
          </a>

          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
          <div className='product-card'>
            <img src={banan} alt='banana' className='product-card-img' />
            <div className='text-box-roduct-card'>
              <p className='text-product-card'>Bunch of bananas</p>
              <b>
                <p className='price-product-card'>$30.00</p>
              </b>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Catalog;
