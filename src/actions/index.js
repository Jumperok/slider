import { SET_INDEX, SET_PAUSE, SET_RESUME } from './types'

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