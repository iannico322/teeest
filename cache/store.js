import { configureStore } from '@reduxjs/toolkit'

import usersCredReducer from './userCredentials'
import usersSchedReducer from './userSchedules'




export default configureStore({
  reducer: {
    user: usersCredReducer,
     sched:usersSchedReducer
  }
})



