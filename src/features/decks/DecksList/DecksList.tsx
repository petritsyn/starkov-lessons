import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksAPI, instance } from '../decks-api'

export const DecksList = () => {

  useEffect(() => {
    decksAPI.fetchDecks()
  }, [])

  return <ul className={s.list}></ul>
}

