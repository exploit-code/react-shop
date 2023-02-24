import Map from 'ol/Map.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import { useEffect } from 'react'
import { useRef } from 'react'
import './MapOL.scss'
import './ol.css'

import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import VectorLayer from 'ol/layer/Vector'
import { Point } from 'ol/geom'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import { default as mapPositionIcon } from './position.svg'

const MapOL = () => {
  const mapElement = useRef()

  useEffect(() => {
    // Координата центра
    const coordinate = [-8236378.7607, 4970672.397]

    // Стиль (картинка) точки
    const iconStyle = new Style({
      image: new Icon({
        src: mapPositionIcon,
      }),
    })
    // Объект с точкой
    const feature = new Feature(new Point(coordinate))
    feature.setStyle(iconStyle)
    // Слой с точкой
    const vectorSource = new VectorSource({
      features: [feature],
    })
    let vectorLayer = new VectorLayer({
      source: vectorSource,
    })
    // Слой с OpenStreetMaps
    const osmLayer = new TileLayer({
      source: new OSM(),
    })
    const mapObject = new Map({
      target: mapElement.current,
      layers: [osmLayer, vectorLayer],
      view: new View({
        center: coordinate,
        zoom: 19,
      }),
    })
    return () => mapObject.setTarget(undefined)
  }, [])

  // map.render()
  return <div ref={mapElement} className='mapol'></div>
}

export default MapOL
