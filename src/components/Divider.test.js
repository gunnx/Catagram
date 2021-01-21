import { render } from '@testing-library/react'
import Divider from './Divider'
import TestProviders from '../mocks/TestProviders'

describe('Divider', () => {
  it('renders without error', () => {
    const { container } = render(<TestProviders hasTheme><Divider /></TestProviders>)

    expect(container.querySelector('span')).toBeInTheDocument()
  })
})
