import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles'

const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 5rem;
  text-align: center;
  padding: 0;
  margin: 2rem 0;
  color: chocolate;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title>
        Hello from Catagram!!!
      </Title>
    </>
  )
}

export default App
