import client from './client'

/**
 * Handle vote up and down and delete. If `voteId` provided will delete that vote otherwise will cast new vote
 * using the `status` value.  If not successful will return `voteId`.
 * @param imageId - the ID of the image you want to cast a vote for
 * @param user = used as 'sub_id'
 * @param oldStatus - the current vote value (undefined|0|1)
 * @param newStatus - the new vote value (0|1)
 * @param voteId - existing voteId value if exists, will be undefined if no vote is set
 * @returns {number|undefined}
 */
const vote = async (imageId, user, oldStatus, newStatus, voteId) => {
  let response
  try {
    if (voteId) {
      response = await client.delete(`votes/${voteId}`)
    }

    if (oldStatus !== newStatus) {
      response = await client.post('votes', {
        image_id: imageId,
        value: newStatus,
        sub_id: user
      })
    }

    if (response.data.message === 'SUCCESS') {
      return response?.data?.id
    }

    return voteId
  } catch (e) {
    window.alert('Unable to change vote for this cat!')
    return voteId
  }
}

export default vote
