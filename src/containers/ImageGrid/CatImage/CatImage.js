import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BlockLoader from '../../../components/Icons/BlockLoader'

const Image = styled.img`
  display: ${props => props.loaded ? 'inline' : 'none'};
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`

const ImagePlaceholder = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.image.background};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const CatImage = (props) => {
  const { image, loaded = false } = props
  const [isLoaded, setIsLoaded] = useState(loaded)

  const onLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {!isLoaded && <ImagePlaceholder><BlockLoader width={100} height={100} /></ImagePlaceholder>}
      <Image
        loaded={isLoaded}
        src={image.url}
        alt={image.original_filename}
        onLoad={onLoad}
      />
    </>
  )
}

CatImage.propTypes = {
  image: PropTypes.object.isRequired,
  loaded: PropTypes.bool
}

export default CatImage
