import React, {useEffect, useRef} from "react";
import {useMap} from "@hooks/map/useMap";
import Box from "@components/elements/atoms/Box";
import mapboxgl from "mapbox-gl";
import {useAppSelector} from "@hooks/app/useAppSelector";
import {selectSelectedPoint} from "@store/map/mapSlice";
import points from "@data/points.json";
import clients from "@data/clients.json";

import {loadSources} from "@pages/map/MapBox/sources";
import {loadLayers} from "@pages/map/MapBox/layers";

export const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const selectedPoint = useAppSelector(selectSelectedPoint)

  const showPopUp = (pointId: number) => {
    const findPoint = points.find((point) => point.id === pointId);
    const findClient = clients.find((client) => client.id === findPoint?.client_id);

    if (!map.current || !findPoint || !findClient) {
      return;
    }

    const { lat, long } = findPoint.coords

    const html = `
      <div>
        <div>${findClient.name}</div>
        <div>${findPoint.type}</div>
        <div>${findPoint.price}</div>
      </div>
    `
    popup.current.setLngLat([long, lat]).setHTML(html).addTo(map.current);
  }

  const onLoad = (map: mapboxgl.Map) => {
    loadSources(map)
    loadLayers(map)

    map.on('click', 'clusters', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });

      if (features?.[0].properties?.cluster_id) {
        const clusterId = features[0].properties.cluster_id;

        const source: mapboxgl.GeoJSONSource = map.getSource('earthquakes') as mapboxgl.GeoJSONSource

        source.getClusterExpansionZoom(
          clusterId,
          (err, zoom) => {
            if (err) return;

            if (features?.[0].geometry.type === 'Point' ) {
              const coords = features[0].geometry.coordinates;
              map.easeTo({
                center: [coords[0], coords[1]],
                zoom: zoom
              });
            }
          }
        );
      }
    });

    map.on('mouseenter', 'clusters', (e) => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseenter', 'unclustered-point', (e) => {
      map.getCanvas().style.cursor = 'pointer';

      if (e.features?.[0].geometry.type === 'Point') {
        const coordinates: number[] = e.features[0].geometry.coordinates.slice();
        const id = e.features[0].properties?.id;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        showPopUp(id)
      }
    });

    map.on('mouseleave', 'clusters', () => {
      map.getCanvas().style.cursor = '';
    });

    map.on('mouseleave', 'unclustered-point', () => {
      map.getCanvas().style.cursor = '';
      popup.current.remove();
    });
  }

  const { map, popup } = useMap({
    defaultLat: 43.238949,
    defaultLng: 76.889709,
    zoom: 13,
    ref: mapContainer,
    onLoad
  })

  useEffect(() => {
    if (selectedPoint && map.current) {
      showPopUp(selectedPoint.id)

      map.current.flyTo({
        center: [selectedPoint.coords.long, selectedPoint.coords.lat],
        zoom: 16,
      });
    }
  }, [selectedPoint])

  return (
    <Box height="100%" width="100%" ref={mapContainer} className="map-container" />
  )
}