import { 
  SET_INDEX, 
  SET_PAUSE, 
  SET_RESUME,
  FETCH_PICTURES_FULFILLED
} from '../actions/types'

const initialState = {
  currentIndex: 0,
  pause: false,
  pictures: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INDEX:
      return { ...state, currentIndex: payload }
    case SET_PAUSE:
      return { ...state, pause: true }
    case SET_RESUME:
      return { ...state, pause: false }
    case FETCH_PICTURES_FULFILLED:
      return { ...state, pictures: payload }
    default:
      return state
  }
}