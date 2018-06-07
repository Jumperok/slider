import { SET_INDEX } from '../actions/types'

const initialState = {
  currentIndex: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INDEX:
      return { ...state, currentIndex: payload }
    default:
      return state
  }
}