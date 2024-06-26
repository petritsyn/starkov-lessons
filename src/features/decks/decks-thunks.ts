import { Dispatch } from "redux"
import { decksAPI } from "./decks-api"
import { setDecksAC } from "./decks-reducer"

export const fetchDecks = () => (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then(res => (dispatch(setDecksAC(res.items))))
}