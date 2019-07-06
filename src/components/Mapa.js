import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { geolocated } from 'react-geolocated';

import MarkerList from './MarkerList';

class Mapa extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zoom: 15
    }
  }

  render() {
    return this.props.coords ?
      (
          <Map ref={this.props.mapRef} center={[this.props.coords.latitude, this.props.coords.longitude]} zoom={this.state.zoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <MarkerList gatos={this.props.gatos}/>
        </Map >
    ) : ''
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(Mapa);;
