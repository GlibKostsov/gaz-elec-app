import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userRegisterReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userRegister: userRegisterReducer,
})

const initialState = {
  userLogin: { userInfo: null },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
