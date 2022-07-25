import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {RootState} from "@store";
import {IPoint} from "@data/Types";

export interface IMapState {
  selectedPoint: IPoint | null
}

const initialState: IMapState = {
  selectedPoint: null
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSelectedPoint: (state, action: PayloadAction<IPoint | null>) => {
      state.selectedPoint = action.payload
    }
  }
})

export const { setSelectedPoint } = mapSlice.actions

export const selectSelectedPoint = (state: RootState) => state.map.selectedPoint

export default mapSlice.reducer
