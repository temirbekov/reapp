import geojson from "geojson";
import {MutableRefObject} from "react";
import mapboxgl from "mapbox-gl";

export type IFeature = geojson.Feature<geojson.Geometry, geojson.GeoJsonProperties>;

export interface IMap {
  defaultLng: number
  defaultLat: number
  zoom: number
  ref: MutableRefObject<HTMLDivElement | null>
  onLoad: (map: mapboxgl.Map) => void
}

export interface IMapOut {
  map:  MutableRefObject<mapboxgl.Map | null>
  popup:  MutableRefObject<mapboxgl.Popup>
}