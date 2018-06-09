import {
  NEXT_PICTURE,
  PREV_PICTURE,
  SET_INDEX, 
  SET_PAUSE, 
  SET_RESUME, 
  FETCH_PICTURES_PENDING, 
  FETCH_PICTURES_FULFILLED, 
  FETCH_PICTURES_REJECTED
} from './types'

import { fetchPictures as fetchPicturesApi } from '../api'

export function nextPicture(currentIndex, picturesLength) {
  const newCurrentIndex = currentIndex === picturesLength - 1 ? 0 : currentIndex + 1

  return {
    type: NEXT_PICTURE,
    payload: newCurrentIndex
  }
}

export function prevPicture(currentIndex, picturesLength) {
  const newCurrentIndex = currentIndex === 0 ? picturesLength - 1 : currentIndex - 1

  return {
    type: PREV_PICTURE,
    payload: newCurrentIndex
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

export function setIndex(value) {
  return {
    type: SET_INDEX,
    payload: value
  }
}

export const fetchPictures = () => async dispatch => {
  dispatch({ type: FETCH_PICTURES_PENDING })

  try {
    const pictures = await fetchPicturesApi()

    dispatch({
        type: FETCH_PICTURES_FULFILLED,
        payload: pictures
    })

  } catch (err) {
    dispatch({type: FETCH_PICTURES_REJECTED})
  }
}