import {FixedSizeList} from "react-window";
import points from "@data/points.json";
import {Row} from "./Row";
import clientsData from "@data/clients.json";
import {IClient, IPoint} from "@data/Types";
import {memoize} from "lodash";
import FixedListHeight from "@components/elements/atoms/FixedListHeight";
import { useMemo, useState } from "react";
import {setSelectedPoint} from "@store/map/mapSlice";
import {useDispatch} from "react-redux";

const formattedClients = () => {
  const myMap = new Map<number, IClient>();
  for (const client of clientsData) {
    myMap.set(client.id, client)
  }

  return myMap
}

export interface IITemData {
  clients: Map<number, IClient>
  points: IPoint[]
  onClick: (point: IPoint) => void
}

const createItemData = memoize((clients, points, onClick): IITemData => ({
  clients,
  points,
  onClick,
}));

export const List = () => {
  const dispatch = useDispatch();

  const [height, setHeight] = useState(0);

  const clients = useMemo(() => formattedClients(), [
    clientsData
  ]);

  const itemData = createItemData(clients, points, (point: IPoint) => {
    dispatch(setSelectedPoint(point))
  });

  return (
    <FixedListHeight onSetHeight={setHeight}>
      <FixedSizeList
        height={height}
        itemCount={points.length}
        itemSize={75}
        width='100%'
        itemData={itemData}
      >
        {Row}
      </FixedSizeList>
    </FixedListHeight>
  )
}

