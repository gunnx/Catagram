import styled from 'styled-components'

const IconButton = styled.button`
  background: none;
  border: 0;
  display: flex;
  margin: 0;
  padding: 0;
  
  &:hover {
    outline: none;
  }
  &:hover, &:focus {
    cursor: pointer;
  }
`

export default IconButton
