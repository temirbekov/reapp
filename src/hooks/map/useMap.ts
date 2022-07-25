import {useEffect, useRef} from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import {IMap, IMapOut} from "@hooks/map/Types";

export const useMap = ({ ref, onLoad, defaultLng, defaultLat, zoom }: IMap): IMapOut => {
  const map = useRef<mapboxgl.Map | null>(null);
  const popup = useRef<mapboxgl.Popup>(new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
}));

  useEffect(() => {
    if (map.current || !ref.current) return;

    map.current = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoidWx1YmVrIiwiYSI6ImNsNXIwNWsxNTIya2IzY21nczlnZjR2N3IifQ.QoBQH5hIK6Sk1ljqyBsaiA',
      container: ref.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [defaultLng, defaultLat],
      zoom: zoom
    });

    map.current.on('load', () => {
      if (!map.current) {
        return
      }

      onLoad(map.current)
    });
  }, []);

  return { map, popup }
}