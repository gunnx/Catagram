import { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import IconButton from '../../../components/IconButton'
import HeartPaw from '../../../components/Icons/HeartPaw'

const grow = keyframes`
  from { transform: scale3d(1, 1, 1) }
  50% { transform: scale3d(1.5, 1.5, 1.5)}
  to {transform: scale3d(1, 1, 1)}
`

const AnimatedHeart = styled.div`
  animation-name: ${props => props.animate ? grow : 'none'};
  animation-duration: 1s;
`

const Favourite = (props) => {
  const { onClick, selected } = props
  const [animate, setAnimate] = useState(false)

  return (
    <IconButton onClick={() => { setAnimate(!selected); onClick() }} aria-pressed={selected} aria-label='Favourite'>
      <AnimatedHeart animate={animate}><HeartPaw width={35} height={35} filled={selected} /></AnimatedHeart>
    </IconButton>
  )
}

Favourite.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool
}

Favourite.defaultProps = {
  selected: false
}

export default Favourite
