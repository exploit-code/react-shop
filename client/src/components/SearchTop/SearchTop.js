import './SearchTop.scss';
import { useState } from 'react';
import menuIcon from '../../images/menuIcon.svg';
import callIcon from '../../images/callIcon.svg';
import useFetch from "../../hooks/useFetch";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/searchReducer";


const SearchTop = ({updateData}) => {
    const [stateCategories, setstateCategories] = useState(false)
    const [nameCategories, setNameCategories] = useState('All')
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()

    const onChangeSearchInput = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const handlerChangeSearchInput = (event) => {
        event.preventDefault();
        dispatch(setValue(searchValue))

    }

    const handlerdeleiValueInput = (event) => {
        event.preventDefault();
        dispatch(setValue(''))
        setSearchValue('')
    }

    const categoriesClick = () => {

        // setNameCategories('All')
        if(stateCategories) {
            setstateCategories(false)
        } else {
            setstateCategories(true)

        }
    }

    const handler = (item) => {
        setNameCategories(item.attributes.title);
        updateData(item.id)
        setstateCategories(false)
    }

    // console.log('nameCategories', nameCategories)

    const {data} = useFetch(
      `/categories`
    );

    //Функция для удаления каждого значения объекта data (модифицирует исходную константу)
    // const findAllCategories = (obj) => {
    //     obj?.map(item => delete item.attributes.desc)
    //     data?.map(item => delete item.attributes.createdAt)
    //     data?.map(item => delete item.attributes.publishedAt)
    //     return data?.map(item => delete item.attributes.updatedAt)
    // }
    // findAllCategories(data)

    // const categories = [{ id: 0, attributes: { title: 'Fresh Meat' } },
    //     { id: 1, attributes: { title: 'Vegetables' } },
    //     { id: 2, attributes: { title: 'Fruit & Nut Gifts' } },
    //     { id: 3, attributes: { title: 'Fresh Berries' } },
    //     { id: 4, attributes: { title: 'Ocean Foods' } },
    //     { id: 5, attributes: { title: '5' } },
    //     { id: 6, attributes: { title: '6' } },
    //     { id: 7, attributes: { title: '7' } },
    //     { id: 8, attributes: { title: '8' } }];

    // console.log('data', data)

    // const listCategories = data?.map((item) =>
    //   <Link to={`/products/${item.id}`} onClick={() => handler(item)} key={item.id}
    //         className='bannermainpage__top_list_a'>{item.attributes.title}</Link>
    // );

    const listCategories = data?.map((item) =>
      <Link to={`/products/${item.id}`} onClick={() => handler(item)} key={item.id}
            className='bannermainpage__top_list_a'>{item.attributes.title}</Link>
    );

    return (
      <div className='container header__box--white'>
          <div className='upmainpage'>
              <div className='upmainpage__left'>
                  <div className='upmainpage__left_search'>
                      <div className='upmainpage__left_depart' onClick={categoriesClick}>
                          <img src={menuIcon} alt='menu'>
                          </img>
                          {nameCategories}
                      </div>
                      <form onSubmit={handlerChangeSearchInput}>
                          <input
                            onChange={event => onChangeSearchInput(event)}
                            value={searchValue}
                            type="text"
                            className='upmainpage__left_search_input'
                            placeholder='What do you need?'/>
                          <button className='upmainpage__left_search_button'>SEARCH</button>
                      </form>
                      <img
                        onClick={handlerdeleiValueInput}
                        className="upmainpage__left_search_delbutton"
                        src="/img/cross.svg"
                        alt="Remove"
                      />
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
      </div>
    )
}

export default SearchTop;
