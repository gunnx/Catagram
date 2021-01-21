import { render, screen } from '@testing-library/react'
import ActionBar from './ActionBar'
import TestProviders from '../../mocks/TestProviders'

describe('ActionBar', () => {
  it('renders favourite/vote buttons and score', () => {
    render(<TestProviders hasTheme><ActionBar image={{ id: '123' }} user='user1' /></TestProviders>)

    expect(screen.getByRole('button', { name: 'Favourite' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vote up' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vote down' })).toBeInTheDocument()
  })

  it('renders a score of 1 if vote value is 1', () => {
    render(<TestProviders hasTheme><ActionBar image={{ id: '123', vote: { id: '1', value: 1 } }} user='user1' /></TestProviders>)

    expect(screen.getByText('1'))
  })

  it('renders a score of -1 if vote value is 0', () => {
    render(<TestProviders hasTheme><ActionBar image={{ id: '123', vote: { id: '1', value: 0 } }} user='user1' /></TestProviders>)
    expect(screen.getByText('-1'))
  })
})
