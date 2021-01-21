import { render, screen } from '@testing-library/react'

import InfoPanel from './InfoPanel'

describe('InfoPanel', () => {
  it('renders heading only', () => {
    const heading = 'Foo'
    render(<InfoPanel heading={heading} />)

    expect(screen.getByText(heading)).toBeInTheDocument()
  })

  it('renders heading and description', () => {
    const heading = 'Foo'
    const desc = 'This is a description'
    render(<InfoPanel heading={heading} description={desc} />)

    expect(screen.getByText(heading)).toBeInTheDocument()
    expect(screen.getByText(desc)).toBeInTheDocument()
  })

  it('renders icon when provided', () => {
    const mockIcon = <svg />
    const { container } = render(<InfoPanel heading='Foo' icon={mockIcon} />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
