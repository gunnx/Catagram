import { useState } from 'react'
import * as APIServices from '../api'

/**
 * Keep track of the vote for an image, calls the API to vote up or down
 * @param imageId - the ID of the image you want to vote on
 * @param user - username which is passed to API as sub_id
 * @param currentVote - the current vote id if exists
 * @returns onVote: () => void, vote: number | undefined
 */
const useVote = (imageId, user, currentVote) => {
  const [vote, setVote] = useState(currentVote?.value)
  const [voteId, setVoteId] = useState(currentVote?.id)

  const onVote = async (newVote) => {
    const newVoteId = await APIServices.vote(imageId, user, vote, newVote, voteId)

    setVoteId(newVoteId)
    setVote(newVoteId ? newVote : undefined)
  }

  return { vote, onVote }
}

export default useVote
