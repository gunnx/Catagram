import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import NoMatch from './NoMatch'

describe('NoMatch', () => {
  it('renders NoMatch component', () => {
    const history = createMemoryHistory()
    const route = '/bad-route'
    history.push(route)
    const { container } = render(<Router history={history}><NoMatch /></Router>)

    expect(screen.getByText('Page not found')).toBeInTheDocument()
    expect(screen.getByText('Could not find /bad-route')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
