import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.colors.progress.background};
  border-radius: ${props => props.round ? `${props.height / 2}px` : 0};
  height: ${props => `${props.height}px`};
  margin: 0;
  padding: 0;
  width: 100%;
`

const Fill = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.progress.fill};
  border-radius: inherit;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  transition: width 0.3s ease-in-out;
  width: ${props => `${props.percent}%`};
`

const Label = styled.span`
  color: ${props => props.labelColor ?? '#fff'};
  font-size: 1rem;
  font-weight: bold;
  padding-right: 1rem;
`

const ProgressBar = (props) => {
  const { height, percent, round } = props

  return (
    <Container round={round} height={height} role='progressbar' aria-valuenow={percent} aria-valuemin='0' aria-valuemax='100' aria-label='A bounded progress bar from 0 to 100'>
      <Fill percent={percent}><Label>{percent}%</Label></Fill>
    </Container>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  height: PropTypes.number,
  round: PropTypes.bool
}

ProgressBar.defaultProps = {
  height: 20
}

export default ProgressBar
