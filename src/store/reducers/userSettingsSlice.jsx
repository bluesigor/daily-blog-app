import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  language: 'eng',
}

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setMode: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      }
    },
    setLanguage: (state, action) => {
      return {
        ...state,
        language: action.payload,
      }
    },
  },
})

export const { setMode, setLanguage } = userSettingsSlice.actions

export default userSettingsSlice.reducer
