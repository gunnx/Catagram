import PropTypes from 'prop-types'
import styled from 'styled-components'
import Favourite from './Favourite/Favourite'
import Score from '../../components/Score'
import Vote from './Vote/Vote'
import useFavourite from '../../hooks/useFavourite'
import useVote from '../../hooks/useVote'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1rem;
`

const ActionBar = (props) => {
  const { image, user } = props

  const { vote, onVote } = useVote(image.id, user, image.vote)
  const { isFavourite, onFavourite } = useFavourite(image.id, user, image?.favourite?.id)

  let score = 0
  if (Number.isInteger(vote)) {
    score = vote === 1 ? 1 : -1
  }

  return (
    <Container>
      <Favourite onClick={onFavourite} selected={isFavourite} />
      <Vote vote={vote} onClick={onVote} />
      <Score value={score} size={30} />
    </Container>
  )
}

ActionBar.propTypes = {
  image: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired
}

export default ActionBar
