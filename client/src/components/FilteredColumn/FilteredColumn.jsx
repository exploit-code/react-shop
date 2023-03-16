import '../../normalize.css';
import './FilteredColumn.scss';

import FilteredColumnList from "../FilteredColumnList/FilteredColumnList";


const FilteredColumn = ({ type }) => {
  return (
    <>
      <div className="filterBlock">
        <div className="filterBlock__latestProducts">
          <div className="filterBlock__latestProducts_titleBlock">
            <div className="filterBlock__latestProducts_titleBlock_title">
              {type} products
            </div>
          </div>
          <FilteredColumnList   type={type} />
        </div>
      </div>
    </>
  )
}

export default FilteredColumn
