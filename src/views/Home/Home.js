import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageGrid from '../../containers/ImageGrid/ImageGrid'
import InfoPanel from '../../components/InfoPanel'
import Loader from '../../components/Loader'
import RobotCat from '../../components/Icons/RobotCat'
import useFetchCats from '../../hooks/useFetchCats'

const HomeContent = styled.div`
  @media (min-width: 735px) {
    padding: 1rem;
  }
`

const Home = (props) => {
  const { user } = props
  const { data: images, isLoading, isError, hasMore, page, fetchMore } = useFetchCats(user)

  let content
  if (isLoading && page === 0) {
    content = <Loader message='Loading content. Please wait.' />
  } else if (isError) {
    content = <InfoPanel heading='Error fetching images....' icon={<RobotCat width={200} height={200} />} />
  } else if (images) {
    content = (
      <ImageGrid
        images={images}
        hasMore={hasMore}
        user={user}
        fetchMore={fetchMore}
      />
    )
  }

  return (
    <HomeContent aria-busy={isLoading ? 'true' : 'false'} aria-live='polite'>
      {content}
    </HomeContent>
  )
}

Home.propTypes = {
  user: PropTypes.string
}

export default Home
