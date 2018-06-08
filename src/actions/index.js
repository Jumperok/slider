import {
  SET_INDEX, 
  SET_PAUSE, 
  SET_RESUME, 
  FETCH_PICTURES_PENDING, 
  FETCH_PICTURES_FULFILLED, 
  FETCH_PICTURES_REJECTED
} from './types'

import { fetchPictures as fetchPicturesApi } from '../api'

export function setIndex(value) {
  return {
    type: SET_INDEX,
    payload: value
  }
}

export function setPause() {
  return {
    type: SET_PAUSE
  }
}

export function setResume() {
  return {
    type: SET_RESUME
  }
}

export const fetchPictures = () => async dispatch => {
  dispatch({ type: FETCH_PICTURES_PENDING })

  try {
    const pictures = await fetchPicturesApi() // await before any function that returns Promise

    dispatch({
        type: FETCH_PICTURES_FULFILLED,
        payload: pictures
    })
    
  } catch (err) {
    dispatch({type: FETCH_PICTURES_REJECTED})
  }
}