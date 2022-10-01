import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {
    name: '',
    img: '',
  },
  token: '',
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      }
    },
    logout: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: '',
          img: '',
        },
        token: '',
      }
    },
  },
})

export const { setUserData, logout } = userDataSlice.actions

export default userDataSlice.reducer
