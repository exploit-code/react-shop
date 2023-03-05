import '../../normalize.css';
import './PartWithBannersAndFilters.scss';

import FilteredColumn from "../FilteredColumn/FilteredColumn";
import BannerPart from "../BannerPart/BannerPart";

const PartWithBannersAndFilters = () => {

  return (
    <>
      <div className="containerPartWithBannersAndFilters">
        <BannerPart/>
        <div className="filterBlock">
          <FilteredColumn type="latest"/>
          <FilteredColumn type="top-rated"/>
          <FilteredColumn type="sale" />
        </div>
      </div>
    </>
  )
}

export default PartWithBannersAndFilters
