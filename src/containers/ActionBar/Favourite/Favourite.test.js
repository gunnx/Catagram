import { fireEvent, render, screen } from '@testing-library/react'

import Favourite from './Favourite'
import Theme from '../../../theme/Theme'

describe('Favourite', () => {
  it('renders Favourite component', () => {
    const mockClick = jest.fn()
    render(<Theme><Favourite onClick={mockClick} /></Theme>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onclick when click', () => {
    const mockClick = jest.fn()
    render(<Theme><Favourite onClick={mockClick} /></Theme>)

    fireEvent.click(screen.getByRole('button'), { button: 0 })

    expect(mockClick).toHaveBeenCalled()
  })

  it('button has aria-pressed true when selected is true', () => {
    const mockClick = jest.fn()
    render(<Theme><Favourite onClick={mockClick} selected /></Theme>)

    expect(screen.getByRole('button', { pressed: true })).toBeInTheDocument()
  })
})
