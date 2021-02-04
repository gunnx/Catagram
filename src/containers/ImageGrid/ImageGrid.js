import PropTypes from 'prop-types'
import styled from 'styled-components'
import ActionBar from '../ActionBar/ActionBar'
import HappyCat from '../../components/Icons/HappyCat'
import IdeaCat from '../../components/Icons/IdeaCat'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfoPanel from '../../components/InfoPanel'
import Loader from '../../components/Loader'
import CatImage from './CatImage/CatImage'

const Grid = styled.div`
  display: grid;
  gap: 3rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const Card = styled.div`
  display: grid;
  position: relative;
  
  &:before {
    content: "";
    display: block;
    grid-area: 1 / 1 / 2 / 2;
    padding-top: 100%;
  }
`

// Shared with Infinite loader to ensure space for Actions
const actionsHeight = '50px'
const Actions = styled.div`
  bottom: -${actionsHeight};
  height: ${actionsHeight};
  left: 0;
  position: absolute;
  width: 100%;
`

const NoMoreResults = styled.div`
  margin-top: 5rem;
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    font-size: 1rem;
    margin: 0 1rem;
  }
`

const LoadMore = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`

const ImageGrid = (props) => {
  const { images, hasMore, fetchMore, user } = props

  if (images.length === 0) {
    return (
      <InfoPanel
        heading='No Cats here yet!'
        description='Why don&rsquo;t you upload some now'
        icon={<IdeaCat width={200} height={200} />}
      />
    )
  }

  return (
    <InfiniteScroll
      dataLength={images.length}
      style={{ paddingBottom: actionsHeight }}
      next={fetchMore}
      hasMore={hasMore}
      loader={<LoadMore><Loader message='More cats available to show' /></LoadMore>}
      endMessage={images.length > 10 ? <NoMoreResults><HappyCat width={50} height={50} /><span>end of the cats</span><HappyCat width={50} height={50} /></NoMoreResults> : null}
    >
      <Grid>
        {images.map((image) => {
          return (
            <Card key={image.id}>
              <CatImage image={image} />
              <Actions>
                <ActionBar image={image} user={user} />
              </Actions>
            </Card>
          )
        })}
      </Grid>
    </InfiniteScroll>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.array,
  hasMore: PropTypes.bool,
  fetchMore: PropTypes.func,
  user: PropTypes.string.isRequired
}

ImageGrid.defaultProps = {
  images: [],
  hasMore: false
}

export default ImageGrid
