import React, { useState } from "react";
import "./Carusel.scss";
import "./Carusel.medi.scss";
import ItemsCarousel from "react-items-carousel";
import SliderIconNext from "../../images/slider-icon_next.svg";
import SliderIconPrev from "../../images/slider-icon_prev.svg";
import Card from '../Card/Card';

const Carusel = ({ data }) => {

    let w = window.screen.availWidth
    let startNoOfCards;
    let startChevronWidth;
    if (w >= 850) {
        startNoOfCards = 4;
        startChevronWidth = 80;
    } else if (w < 850 && w >= 670) {
        startNoOfCards = 3;
        startChevronWidth = 80;
    } else if (w < 670 && w >= 540) {
        startNoOfCards = 2;
        startChevronWidth = 0;
    } else if (w < 540) {
        startNoOfCards = 1;
        startChevronWidth = 0;
    }

    const [noOfCards, setNoOfCards] = useState(startNoOfCards);
    const [chevronWidth, setChevronWidth] = useState(startChevronWidth);
    const [state, setState] = useState(0);
    const onChange = (value) => setState(value);

    function displayWindowSize() {
        let w = window.screen.availWidth;

        if (w >= 850) {
            setNoOfCards(4);
            setChevronWidth(80);
        } else if (w < 850 && w >= 670) {
            setNoOfCards(3);
            setChevronWidth(0);
        } else if (w < 670 && w >= 540) {
            setNoOfCards(2);
            setChevronWidth(0);
        } else if (w < 540) {
            setNoOfCards(1)
            setChevronWidth(0);
        }
    }
    window.addEventListener("resize", displayWindowSize);

    const carouselItems = data?.map((item) => (
        <Card item={item} key={item.id} />
    ));

    return (
        <div className="slider">
            <ItemsCarousel
                gutter={20}
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
