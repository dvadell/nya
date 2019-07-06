import React  from "react";
import Slider from "react-slick";
import Card   from '../Card'

const CardSlider = ({gatos, mapRef}) => {
    var settings = {
        className: "slider",
        centerMode: false,
        dots: false,
        infinite: false,
        // speed: 500,
        // variableWidth: true
        // slidesToShow: 1,
        // slidesToScroll: 1
    };

    const cardArray = gatos.map((gato,i) => {
        return <Card mapRef={mapRef} key={i} coords={gato.coords} _id={gato._id} nombre={gato.nombre} fechahora={gato.fechahora}
                     descr={gato.descr} img={gato.img}/>
    })
    return ( <Slider {...settings}>{cardArray}</Slider> )
}

export default CardSlider;
