import { render } from '@testing-library/react'
import CatImage from './CatImage'
import TestProviders from '../../../mocks/TestProviders'

describe('CatImage', () => {
  it('shows loader while waiting for image to load', () => {
    const { container } = render(<TestProviders hasTheme><CatImage image={{}} /></TestProviders>)

    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveStyle('display: none')
  })

  it('shows image when loaded is true', () => {
    const { container } = render(<TestProviders hasTheme><CatImage image={{}} loaded /></TestProviders>)

    expect(container.querySelector('svg')).not.toBeInTheDocument()
    expect(container.querySelector('img')).toHaveStyle('display: inline')
  })
})
