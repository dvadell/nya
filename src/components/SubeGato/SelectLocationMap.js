import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { geolocated } from 'react-geolocated';
import translations from './SelectLocationMap.translations'
import Localizer from '../../lib/Localizer'


// Props: lang
class SelectLocationMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
        zoom: 15,
        hasLocation: false,
        latlng: {}
    }
  }

    handleClick = (e) => {
        this.setState({
            hasLocation: true,
            latlng: e.latlng
        })
        this.props.setCoords(e.latlng)
    }

  render() {
    const Localize = Localizer(translations)

    const marker = this.state.hasLocation ? (
        <Marker position={this.state.latlng}>
            <Popup><Localize>I found this cat here</Localize></Popup>
        </Marker>
    ) : null

    return this.props.coords ?  
      (
          <Map center={[this.props.coords.latitude, this.props.coords.longitude]} 
                onClick={this.handleClick}  
                onLocationfound={this.handleLocationFound} zoom={this.state.zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {marker}
        </Map >
    ) : ''
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(SelectLocationMap);;
