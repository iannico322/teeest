import { configureStore } from '@reduxjs/toolkit'

import usersCredReducer from './userCredentials'
import usersSchedReducer from './userSchedules'
import userSearch from './userSearch'



export default configureStore({
  reducer: {
    user: usersCredReducer,
     sched:usersSchedReducer,
     search : userSearch,
  }
})



