export const baseUrl = 'https://rickandmortyapi.com/api/location'

// generamos un randomId lo ejecutamos y lo multiplicamos por la cantidad total de locaciones, me trae un cantidad entre el 1 y 126
export const randomId = Math.floor(Math.random() * 126) + 1