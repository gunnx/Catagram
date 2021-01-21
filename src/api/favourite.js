import client from './client'

/**
 * Handle favourite/unfavourite requests, if `favouriteId` provided then call delete
 * otherwise post to get a new `favouriteId`. Returns the new Id for post requests or null for delete
 * If not successful will return the `voteId` value
 * @param imageId
 * @param userId
 * @param favouriteId
 * @returns {number|undefined}
 */
const favourite = async (imageId, userId, favouriteId) => {
  let response
  try {
    if (favouriteId) {
      response = await client.delete(`favourites/${favouriteId}`)
    } else {
      response = await client.post('favourites', {
        image_id: imageId,
        sub_id: userId
      })
    }

    if (response?.data?.message === 'SUCCESS') {
      return response?.data?.id
    }

    return favouriteId
  } catch {
    window.alert('Unable to favourite this cat!')
    return favouriteId
  }
}

export default favourite
