import { 
  FETCH_PICTURES_FULFILLED,
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_REJECTED
} from '../actions/types'

const initialState = {
  pictures: [],
  isFetching: false,
  fetchingError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PICTURES_PENDING:
      return { 
        ...state, 
        isFetching: true,
        fetchingError: false 
      }
    case FETCH_PICTURES_FULFILLED:
      return { 
        ...state, 
        pictures: payload, 
        isFetching: false,
        fetchingError: false
      }
    case FETCH_PICTURES_REJECTED:
      return { 
        ...state, 
        fetchingError: true, 
        isFetching: false
      }
    default:
      return state
  }
}