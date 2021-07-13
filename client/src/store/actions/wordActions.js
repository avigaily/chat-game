import {SET_SCORE, SET_NAME, SET_PLAYERS, ADD_PLAYER} from '../constants/index'


export function setScore(payload) {
  console.log('got to actions',payload);
  return {
    type: SET_SCORE,
    payload
  }
}

export function setName(payload) {
  return {
    type: SET_NAME,
    payload
  }
}
export function setPlayers(payload) {
  return {
    type: SET_PLAYERS,
    payload
  }
}
export function addPlayer(payload) {
  return {
    type: ADD_PLAYER,
    payload
  }
}
