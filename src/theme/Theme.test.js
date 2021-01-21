import { render, screen } from '@testing-library/react'
import Theme from './theme'

describe('Theme', () => {
  it('renders children when mode is light', () => {
    render(<Theme mode='light'>light</Theme>)

    expect(screen.getByText('light')).toBeInTheDocument()
  })

  it('renders children when mode is dark', () => {
    render(<Theme mode='dark'>dark</Theme>)

    expect(screen.getByText('dark')).toBeInTheDocument()
  })
})
