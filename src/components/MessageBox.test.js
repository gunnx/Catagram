import { render, screen } from '@testing-library/react'

import MessageBox from './MessageBox'
import Theme from '../theme/Theme'

describe('MessageBox', () => {
  it('renders MessageBox component with icon', () => {
    const text = 'Foo'
    const { container } = render(<Theme><MessageBox type='positive'>{text}</MessageBox></Theme>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders MessageBox component with no icon', () => {
    const text = 'Foo'
    const { container } = render(<Theme><MessageBox type='positive' icon={false}>{text}</MessageBox></Theme>)

    expect(screen.getByText(text)).toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('renders a positive message', () => {
    render(<Theme><MessageBox type='positive' alert>Foo</MessageBox></Theme>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders a negative message', () => {
    render(<Theme><MessageBox type='negative' alert>Foo</MessageBox></Theme>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
