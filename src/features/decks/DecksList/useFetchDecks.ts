import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { fetchDecks } from "../decks-thunks"
import { selectDecks } from "../decks-selectors"

export const useFetchDecks = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector(selectDecks)

    useEffect(() => {
        dispatch(fetchDecks())
    }, [dispatch])

    return { decks }
}