import { createSlice } from '@reduxjs/toolkit'

const userReduce = createSlice({
  name: 'user', // ác định action.type trong Redux DevTools, không ảnh hưởng đến truy xuất state
  initialState: {
    user: {}
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { loginUser } = userReduce.actions

export const selectCurrentUser = (state) => {
  return state.user.user //state.name of Slice.name of value
}

export default userReduce.reducer
