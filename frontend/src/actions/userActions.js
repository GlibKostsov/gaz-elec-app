import axios from 'axios'
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants'

export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    console.log('Register action is running')
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/users',
        { firstName, lastName, email, password },
        config
      )

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
