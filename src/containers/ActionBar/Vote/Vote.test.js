import { fireEvent, render, screen } from '@testing-library/react'

import Vote from './Vote'
import Theme from '../../../theme/Theme'

describe('Vote', () => {
  it('renders Vote component', () => {
    const mockClick = jest.fn()
    render(<Theme><Vote onClick={mockClick} /></Theme>)

    expect(screen.getByRole('button', { name: 'Vote up' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vote down' })).toBeInTheDocument()
  })

  it('calls onVote with 0 when vote down button clicked', () => {
    const mockClick = jest.fn()
    render(<Theme><Vote onClick={mockClick} /></Theme>)

    fireEvent.click(screen.getByRole('button', { name: 'Vote down' }), { button: 0 })

    expect(mockClick).toHaveBeenCalledWith(0)
  })

  it('calls onVote with 1 when vote down button clicked', () => {
    const mockClick = jest.fn()
    render(<Theme><Vote onClick={mockClick} /></Theme>)

    fireEvent.click(screen.getByRole('button', { name: 'Vote up' }), { button: 0 })

    expect(mockClick).toHaveBeenCalledWith(1)
  })

  it('marks button as pressed if vote is up', () => {
    const mockClick = jest.fn()
    render(<Theme><Vote onClick={mockClick} vote={0} /></Theme>)

    const button = screen.getByRole('button', { pressed: true })
    expect(button).toHaveAttribute('aria-label', 'Vote down')
  })

  it('marks button as pressed if vote is down', () => {
    const mockClick = jest.fn()
    render(<Theme><Vote onClick={mockClick} vote={1} /></Theme>)

    const button = screen.getByRole('button', { pressed: true })
    expect(button).toHaveAttribute('aria-label', 'Vote up')
  })
})
