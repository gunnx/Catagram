import { useState } from 'react'
import * as APIServices from '../api'

const useFavourite = (imageId, userId, favId) => {
  const [isFavourite, setIsFavourite] = useState(favId !== undefined)
  const [favouriteId, setFavouriteId] = useState(favId)

  const onFavourite = async () => {
    const newId = await APIServices.favourite(imageId, userId, favouriteId)

    setFavouriteId(newId)
    setIsFavourite(newId !== undefined)
  }

  return { isFavourite, onFavourite }
}

export default useFavourite
