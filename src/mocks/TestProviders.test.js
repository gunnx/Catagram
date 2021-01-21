import { render, screen } from '@testing-library/react'
import TestProviders from './TestProviders'

describe('TestProviders', () => {
  it('passes children through', () => {
    render(<TestProviders>test</TestProviders>)

    expect(screen.getByText(/test/i))
  })
})
