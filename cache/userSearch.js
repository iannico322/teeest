import { createSlice } from '@reduxjs/toolkit'

export const userSearch = createSlice({
  name: 'search',
  initialState: {
    value: {
      
      "buildingID":"0",
      "room": "",
      "floor": "",
      "block": "",
    }
  ,
  },
  reducers: {
    logout: (state) => {
      state.value = []
    },
    addSearch: (state, action) => {
      state.value = (action.payload)
    },
  },
})
export const { logout, addSearch } = userSearch.actions
export const searchs = (state) => state.search.value

export default userSearch.reducer
