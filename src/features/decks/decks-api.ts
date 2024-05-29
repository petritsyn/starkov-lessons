import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksAPI = {
  fetchDecks() {
    return instance.get<ResponseType>('/v2/decks').then(res => console.log(res.data))
  }
}

type ResponseType = {
  "items": [
    {
      "author": {
        "id": "string",
        "name": "string"
      },
      "id": "string",
      "userId": "string",
      "name": "string",
      "isPrivate": true,
      "cover": "string",
      "created": string,
      "updated": string,
      "cardsCount": number
    }
  ],
  "pagination": {
    "currentPage": number,
    "itemsPerPage": number,
    "totalPages": number,
    "totalItems": number
  }
}