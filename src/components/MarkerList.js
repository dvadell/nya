import React from 'react';
import GatoMarker from './GatoMarker';

const MarkerList = ({gatos}) => {
    const markerArray = gatos.map((gato,i) => {
        // console.log(gatos)
        if (! gato.coords) { console.log('MarkerList: un gato sin coords?', gato); return ''} 
        return <GatoMarker position={gato.coords} key={i} id={gato._id} nombre={gato.nombre} 
                        fechahora={new Date(gato.fechahora).toLocaleString()} img={gato.img}/>
    })
    return (<div>{markerArray}</div>)
}

export default MarkerList;
