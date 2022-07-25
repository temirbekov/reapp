import mapboxgl from "mapbox-gl";
import draftPoints from "@data/points.json";
import {IFeature} from "@hooks/map/Types";

export const loadSources = (map: mapboxgl.Map) => {
  const points = draftPoints
    .map((draft): IFeature => {
      return (
        {
          type: 'Feature',
          properties: {
            id: draft.id,
          },
          geometry: {
            type: 'Point',
            coordinates: [draft.coords.long, draft.coords.lat]
          }
        }
      )
    })

  map.addSource('earthquakes', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: points,
    },
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50
  });
}