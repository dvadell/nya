import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const GatoMarker = ({position, nombre, img, id, fechahora}) => {
    let [lat, lon] = position.split(',') // XX, YY -> [XX, YY]
    return (
        <Marker position={[lat,lon]}>
        <Popup>
            <img alt={nombre} src={img} style={{maxWidth: 200, maxHeight: 200}}/>
            <h2>{nombre}</h2>
            <h3>Visto el {fechahora}</h3>
            <a href={"/ver/" + id}>Más info</a>
        </Popup>
    </Marker>
    )
}

export default GatoMarker;