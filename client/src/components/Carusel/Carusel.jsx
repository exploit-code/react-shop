import React, { useState } from "react";
import "./Carusel.scss";
import ItemsCarousel from "react-items-carousel";
import SliderIconNext from "../../images/slider-icon_next.svg";
import SliderIconPrev from "../../images/slider-icon_prev.svg";
import Card from '../Card/Card';

const Carusel = ({ data }) => {
    const noOfCards = 4;
    const chevronWidth = 80;
    const [state, setState] = useState(0);
    const onChange = (value) => setState(value);

    const carouselItems = data?.map((item) => (
        <Card item={item} key={item.id} />
    ));

    return (
        <div className="slider">
            <ItemsCarousel
                gutter={32}
                children={carouselItems}
                numberOfCards={noOfCards}
                activeItemIndex={state}
                requestToChangeActive={onChange}
                rightChevron={
                    <button className="slider__btn" >
                        <img src={SliderIconNext} alt='' />
                    </button>
                }
                leftChevron={
                    <button className="slider__btn" >
                        <img src={SliderIconPrev} alt='' />
                    </button>
                }
                chevronWidth={chevronWidth}
                outsideChevron
            />
        </div>
    );
}

export default Carusel;
