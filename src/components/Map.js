import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
// import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"



export const pointerIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    // iconRetinaUrl: '../assets/pointerIcon.svg',
    // iconAnchor: [5, 55],
    iconAnchor: [20, 40],
    // popupAnchor: [10, -44],
    // iconSize: [25, 55],
    // shadowUrl: '../assets/marker-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [20, 92],
    className: 'bounce'
  })


export default class SimpleExample extends Component{
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{height:300}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}