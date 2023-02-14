import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import PartWithBannersAndFilters from "../PartWithBannersAndFilters/PartWithBannersAndFilters";

const Home = () => {
    return (
        <div>
            <div className="contain" >
                <Categories/>
                <FeaturedProducts id="con1" type="latest"/>
                <FeaturedProducts id="con2" type="top-rated"/>
                <FeaturedProducts id="con3" type="review"/>
                <FeaturedProducts type="featured"/>
                <PartWithBannersAndFilters />
            </div>


        </div>
    );
};

export default Home;
