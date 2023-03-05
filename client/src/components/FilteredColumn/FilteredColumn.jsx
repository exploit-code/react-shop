import '../../normalize.css';
import './FilteredColumn.scss';

import arrowRight from './img/arrow_right.png';
import arrowLeft from './img/arrow_left.png';

import FilteredColumnList from "../FilteredColumnList/FilteredColumnList";
import {useState} from "react";

const FilteredColumn = ({ type }) => {

const [firstIdx, setFirstIdx] = useState(0);
const secondIdx = firstIdx+3;

  const arrRight = () => {
    setFirstIdx(firstIdx + 3);
  }
  const arrLeft = () => {
    setFirstIdx(firstIdx - 3);
  }

  return (
    <>
        <div className="filterBlock">
          <div className="filterBlock__latestProducts">
            <div className="filterBlock__latestProducts_titleBlock">
              <div className="filterBlock__latestProducts_titleBlock_title">{type} products</div>
              <img  onClick={arrLeft} className="filterBlock__latestProducts_titleBlock_arrowLeft" src={arrowLeft} alt="arrow left"></img>
             <img onClick={arrRight} className="filterBlock__latestProducts_titleBlock_arrowRight" id="show-more"  src={arrowRight} alt="arrow right"></img>
            </div>
            <FilteredColumnList firstIdx={firstIdx} secondIdx={secondIdx} type={type} />
          </div>
        </div>
    </>
  )
}

export default FilteredColumn
