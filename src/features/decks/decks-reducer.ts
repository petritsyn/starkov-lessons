import { Deck } from "./decks-api"

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return {
        ...state,
        decks: action.data
      }
    default:
      return state
  }
}

export const setDecksAC = (data: Deck[]) => ({type: 'SET-DECKS' as const, data})

type DecksActions = ReturnType<typeof setDecksAC>
