import './catalog.scss';
// import '../../index.scss';
import banan from '../../images/banan.png';
import line from '../../images/line.png';
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { data, loading, error } = useFetch(
    `/products?populate=*`
  );
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
          {data?.slice(1,9).map((item, index) => (
            <Link key={index} to={`/productpage/${item.id}`}>
            <div className='product-card'>

              <img src={
                process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
              } alt={item.attributes.title} className='product-card-img' />

              <div className='text-box-roduct-card'>
                <p className='text-product-card'>{item.attributes.title}</p>
                <b>
                  <p className='price-product-card'>${item.attributes.price}</p>
                </b>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    )
}

export default Catalog;