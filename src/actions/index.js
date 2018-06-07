import { SET_INDEX } from './types'

export function setIndex(value) {
  return {
    type: SET_INDEX,
    payload: value
  }
}