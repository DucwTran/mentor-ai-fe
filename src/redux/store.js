import { configureStore } from '@reduxjs/toolkit'
import userReduce from './userSlice'
import counterReducer from './counterSlice'

//Cấu hình redux persists
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootPersistConfig = {
  key: 'root', //key của persist do mình chỉ định, gì cũng được
  storage: storage, //biến storage ở trên - để lưu vào storage
  whitelist: ['user', 'counter'] //định nghĩa các slice dữ liệu ĐƯỢC PHÉP lưu vào storage qua mỗi lần F5 trình duyệt
  // blacklist: ["activeBoard"], // định nghĩa các slice dữ liệu KHÔNG ĐƯỢC PHÉP lưu vào storage qua mỗi lần F5 trình duyệt
}
// Combine các reducers trong dự án
const reducers = combineReducers({
  counter: counterReducer,
  user: userReduce
})

// Thực hiện persistReducer
const persistedReducer = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
