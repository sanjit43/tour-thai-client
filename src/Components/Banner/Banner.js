import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>WELCOME TO THAILAND</h3>
                        <p>All Thailand tours can be privately customized to suit your desire</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>THE LAND OF SMILE</h3>
                        <p>Thailand, “Land of Smile”, is regarded as one of the most attractive destinations in Southeast Asia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>THAILAND PRIVATE TOURS</h3>
                        <p>Crystal turquoise beaches and luxury bungalows/hotels, ancient monasteries, off-the-beaten trekking adventure, delicious and tasty food and meditation retreat.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;