import { SET_SCORE, SET_NAME, SET_ID, SET_IS_PLAYING, SET_PLAYERS, ADD_PLAYER } from '../constants/index'

const initialState = {
    name: '',
    score: 0,
    id: '',
    players: {}
};

export default function GameReducer(state = initialState, action) {
    console.log('reducer', action.payload);
    switch (action.type) {
        case SET_SCORE:
            return {
                ...state,
                score: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload
            }
        case SET_IS_PLAYING:
            return {
                ...state,
                isPlaying: action.payload
            }
        case SET_PLAYERS:
            console.log('case set players', action.payload);
            return {
                ...state,
                players: action.payload//players include user-player
            }
        case ADD_PLAYER:
            console.log('case add player', action.payload);
            return {
                ...state,
                players: {...state.players,[action.payload.id]:action.payload}
            }
        default:
            return state;
    }
}