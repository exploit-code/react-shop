import React from "react";
import range from "lodash/range";
import "./Carusel.scss";
import ItemsCarousel from "react-items-carousel";
import SliderIconNext from "../../images/slider-icon_next.svg";
import SliderIconPrev from "../../images/slider-icon_prev.svg";

const noOfItems = 12; // array products
const noOfCards = 3;
// const autoPlayDelay = 4000;
const chevronWidth = 80;

const carouselItems = range(noOfItems).map((index) => (
    <div className="slider__item" key={index}>
        {index + 1}
    </div>
));

export default class AutoPlayCarousel extends React.Component {
    state = {
        activeItemIndex: 0,
    };

    //AutoPlayCarousel

    //   componentDidMount() {
    //     this.interval = setInterval(this.tick, autoPlayDelay);
    //   }

    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    // tick = () =>
    //   this.setState((prevState) => ({
    //     activeItemIndex:
    //       (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    //   }));

    onChange = (value) => this.setState({ activeItemIndex: value });

    render() {
        return (
            <div className="slider">
                <ItemsCarousel
                    gutter={12}
                    numberOfCards={noOfCards}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={this.onChange}
                    rightChevron={
                        <button className="slider__btn">
                            <img src={SliderIconNext} alt='' />
                        </button>
                    }
                    leftChevron={
                        <button className="slider__btn">
                            <img src={SliderIconPrev} alt='' />
                        </button>
                    }
                    chevronWidth={chevronWidth}
                    outsideChevron
                    children={carouselItems} // produsts
                />
            </div>
        );
    }
}
