import { createSlice } from '@reduxjs/toolkit'

export const userSchedules = createSlice({
  name: 'sched',
  initialState: {
    value: [{
      "title": " Mang Chicks ",
      "location": "Computer Lab 305",
      "day": "WED",
      "time": "7:00am - 9:00am",
    }
  ],
  },
  reducers: {
    logout: (state) => {
      state.value = []
    },
    addSchedule: (state, action) => {
      state.value.push(action.payload)
    },
  },
})
export const { logout, addSchedule } = userSchedules.actions
export const scheds = (state) => state.sched.value

export default userSchedules.reducer
