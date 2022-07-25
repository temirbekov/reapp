import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ColorMode } from "@core/theme/colors";
import {RootState} from "@store";

export interface ISettingsState {
  colorMode: ColorMode
}

const initialState: ISettingsState = {
  colorMode: ColorMode.light
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColorMode: (state, action: PayloadAction<ColorMode>) => {
      state.colorMode = action.payload
    }
  }
})

export const { setColorMode } = settingsSlice.actions

export const selectColorMode = (state: RootState) => state.settings.colorMode

export default settingsSlice.reducer
