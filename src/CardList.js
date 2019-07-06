import React from 'react';
import Card from './Card';

const CardList = ({gatos}) => {
    const cardArray = gatos.map((gato,i) => {
        return <Card key={i} id={gato.id} nombre={gato.nombre} fechahora={gato.fechahora}
                     descr={gato.descr} img={gato.img}/>
    })
    return (<div>{cardArray}</div>)
}

export default CardList;
