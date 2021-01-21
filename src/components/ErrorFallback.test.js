import { render, screen } from '@testing-library/react'

import ErrorFallback from './ErrorFallback'

describe('ErrorFallback', () => {
  it('renders ErrorFallback component', () => {
    render(<ErrorFallback />)

    expect(screen.getByText('Error occurred')).toBeInTheDocument()
    expect(screen.getByText('Something unexpected happened, please try refreshing')).toBeInTheDocument()
  })
})
