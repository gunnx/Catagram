import styled from 'styled-components'

const Divider = styled.span`
  border-color: ${props => props.theme.colors.divider};
  border-style: solid;
  border-width: 0 0 thin 0;
  display: inline-block;
  height: 1px;
  width: 100%;
`

export default Divider
