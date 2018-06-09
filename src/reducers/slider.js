import { 
  SET_INDEX, 
  SET_PAUSE, 
  SET_RESUME,
  NEXT_PICTURE,
  PREV_PICTURE
} from '../actions/types'

const initialState = {
  currentIndex: 0,
  pause: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INDEX:
      return { ...state, currentIndex: payload }
    case NEXT_PICTURE:
      return { ...state, currentIndex: payload}
    case PREV_PICTURE:
      return { ...state, currentIndex: payload}
    case SET_PAUSE:
      return { ...state, pause: true }
    case SET_RESUME:
      return { ...state, pause: false }
    default:
      return state
  }
}