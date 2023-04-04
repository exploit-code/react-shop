import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './favorites-style.scss';
import emptyFavorites from './img/empty-favorites.png'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { removeItemsFavorites } from "../../redux/favoritesReducer";
import Button from "../../components/Button/Button";
import useFetch from "../../hooks/useFetch";
import LeftSideProfile from "../../components/LeftSideProfile/LeftSideProfile";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from '../../context/UserContext';


const Favorites = () => {

  const { user } = useContext(AuthContext);
  const avatarName = user.displayName?.slice(0, 2);

  const favoritesItems = useSelector((state) => state.favorites.products)
  const dispatch = useDispatch()

  const findUseCategories = (obj) => {
    return Array.from(new Set(obj?.map(cat => cat.category)))
  }

  const findCategory = (obj, category) => {
    return obj.filter(cat => cat.category === category)
  }

  // console.log('favoritesItems', favoritesItems)
  // console.log('findCategory', findCategory(favoritesItems, 'Vegetables'))
  // console.log('ALLcategory', findUseCategories(favoritesItems))

  return (
    <>
      <div className='grid'>
        <div className='grid__box'>
          <LeftSideProfile avatarName={avatarName} />
        </div>
        <div className='grid__box'>
          <div className='page-favorites-wrp'>
            <div id='favoritesInfo' className='favorites'>
              <header className='head-favorites-wrp'>
                <h3 className='head-favorites-title'>
                  My Favorites
                </h3>
              </header>

              {favoritesItems.length > 0 ? (
                <div className='favorites-products-wrp'>
                  <section className='favorites-products'>
                    {findUseCategories(favoritesItems).map((item, idx) => (
                      <div key={idx}>
                        <div className='favorites-products-title'>
                          <h4 className='favorites-products-title'>
                            {item}
                          </h4>
                        </div>

                        <div className="favorites-product-total-wrap">
                          {findCategory(favoritesItems, item).map((item, idx) => (
                            <div key={idx} className='favorites-product-total'>
                              <Link to={`/productpage/${item.id}`} className="favorites-items-wrp">
                                <div className='overlay'>
                                  <img className='favorites-item-img' src={process.env.REACT_APP_UPLOAD_URL + item.img}
                                    alt={item.title} />
                                </div>
                                <div className='favorites-item'>
                                  <h5 className='favorites-item-title'>
                                    {item.title}
                                  </h5>
                                  <p className='favorites-item-txt'>${item.price}</p>
                                </div>
                              </Link>
                              <p className='favorites-total-txt'>{item.desc}</p>
                              <div className='favorites-total'>
                                <Button onClick={() =>
                                  dispatch(
                                    addToCart({
                                      id: item.id,
                                      title: item.title,
                                      desc: item.desc,
                                      price: item.price,
                                      img: item.img,
                                      totalPriceItem: item.price,
                                      quantity: 1,
                                    }
                                    )
                                  )
                                }
                                  text='ADD TO CART'
                                />
                                <button className='favorites-total-remove-btn'
                                  onClick={() => dispatch(removeItemsFavorites(item))}> Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              ) : (
                <div className='favorites-empty-container'>
                  <div className='favorites-empty-wrp'>
                    <img src={emptyFavorites} alt="favorites-img" />
                    <h4 className='favorites-title'>No bookmarks :(</h4>
                    <p className='favorites-txt'>You haven't bookmarked anything</p>
                    <Link to="/">
                      <button className='favorites-btn'>
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
