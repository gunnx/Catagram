import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import IconButton from '../../../components/IconButton'
import Thumb from '../../../components/Icons/Thumb'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 80px;
`

const pulse = keyframes`
  from { transform: scale3d(1, 1, 1) rotate(0deg); }
  50% { transform: scale3d(1.5, 1.5, 1.5) rotate(15deg);}
  to {transform: scale3d(1, 1, 1) rotate(0deg); }
`

const AnimateVote = styled.div`
  animation-name: ${props => props.animate ? pulse : 'none'};
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
`

const Vote = (props) => {
  const { vote, onClick } = props
  const [animate, setAnimate] = useState()

  return (
    <Container>
      <IconButton onClick={() => { onClick(0); setAnimate(0) }} aria-pressed={vote === 0} aria-label='Vote down'>
        <AnimateVote animate={animate === 0}><Thumb filled={vote === 0} width={30} height={30} inverted={false} /></AnimateVote>
      </IconButton>
      <IconButton onClick={() => { onClick(1); setAnimate(1) }} aria-pressed={vote === 1} aria-label='Vote up'>
        <AnimateVote animate={animate === 1}><Thumb filled={vote === 1} inverted width={30} height={30} /></AnimateVote>
      </IconButton>
    </Container>
  )
}

Vote.propTypes = {
  vote: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default Vote
