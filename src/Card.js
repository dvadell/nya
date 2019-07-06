import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({_id, nombre, img, fechahora, coords, mapRef}) => {
    const logID = 'Card:'
    let fechaLinda = '(Sin fecha)'
    let fecha = ''
    let hora = '';
    // Date in epoch format - 13 digits
    if (! isNaN(fechahora)) {
        fechahora =  new Date(fechahora).toISOString()
    }
    if (fechahora) {
        fecha = fechahora.slice(0,10); 
        hora  = fechahora.slice(11,16);
        fechaLinda = fecha + ' ' + hora + 'hs';
    }

    const centerMap = () => {
        let coordsArray = coords.split(', ')
        mapRef.current.leafletElement.setView(coordsArray, 15, {animate: true});
    }

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" 
            onClick={centerMap}>
            <img alt={nombre} src={img} style={{maxWidth: 200, maxHeight: 200}}/>
            <div>
                <h2>{nombre}</h2>
                <p>Visto el {fecha}<br/>
                a las {hora}hs</p>
                <Link to={"/ver/" + _id}>más info</Link>
            </div>
        </div>
    )
}

export default Card;
