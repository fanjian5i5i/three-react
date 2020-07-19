import React, { Component, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useTransition, animated } from 'react-spring'
// import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"

let Icons = () =>{
  let icons = []
  let i = 50

  let bounce = (e) =>{
    let lat = e.target.options.position[0] + 0.001;
    let latO = e.target.options.position[0]
    let lng = e.target.options.position[1];
    e.target.setLatLng([lat,lng])
    setTimeout(()=>{
      e.target.setLatLng([latO,lng])
    },100)
    // e.target.options.icon.options.position = [e.target.options.icon.options.position[0]+0.00001,e.target.options.icon.options.position[1]]
  }
  while(i>0){
    icons.push(
      <Marker onMouseOver={bounce} onClick={bounce} position={[ Math.random()*0.05+42.33,Math.random()*0.2-71.2]} icon={new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(Math.random()*100).toFixed()+'.png',
        iconAnchor: [20, 20]
        })} key={i}/>
    )
    i--
  }
  return (icons)

}

let Item = () =>{
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  })
  return transitions.map(({ item, key, props }) => 
  item
    ? <animated.div style={props} onClick={()=>set(!toggle)}>😄</animated.div>
    : <animated.div style={props} onClick={()=>set(!toggle)}>🤪</animated.div>
  )
}


export default class SimpleExample extends Component{
  state = {
    lat: 42.36,
    lng: -71.05,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const iconPosition = [(this.state.lat-0.01), this.state.lng-0.01]

    return (
      <>
      <Map center={position} zoom={this.state.zoom} style={{height:500}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
        />

        <Icons/>
        
      </Map>
      <Item/>
      </>
    )
  }
}