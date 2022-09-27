import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  language: 'en',
}

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setMode: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      }
    },
  },
})

export const { setMode } = userSettingsSlice.actions

export default userSettingsSlice.reducer
