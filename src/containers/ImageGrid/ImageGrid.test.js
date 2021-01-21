import { render, screen } from '@testing-library/react'
import ImageGrid from './ImageGrid'
import TestProviders from '../../mocks/TestProviders'

describe('ImageGrid', () => {
  it('returns message when no images provided', () => {
    render(<ImageGrid user='user1' />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('No Cats here yet!')
  })

  it('renders end of images message (when images > 10)', () => {
    const images = [
      { id: '1', url: 'abc' }, { id: '2', url: 'abc' }, { id: '3', url: 'abc' },
      { id: '4', url: 'abc' }, { id: '5', url: 'abc' }, { id: '6', url: 'abc' },
      { id: '7', url: 'abc' }, { id: '8', url: 'abc' }, { id: '9', url: 'abc' },
      { id: '10', url: 'abc' }, { id: '11', url: 'abc' }]

    render(<TestProviders hasTheme><ImageGrid images={images} user='user1' /></TestProviders>)

    expect(screen.getByText(/end of the cats/i)).toBeInTheDocument()
  })

  it('renders loader if there are more images to show ', () => {
    const images = [{ id: '1', url: 'abc' }]

    render(<TestProviders hasTheme><ImageGrid images={images} user='user1' hasMore /></TestProviders>)

    // screen.debug(null, 2000000000000)
    expect(screen.getByLabelText(/more cats available to show/i)).toBeInTheDocument()
  })

  it('renders image', () => {
    const images = [{ id: '1', url: 'http://url/', original_filename: 'orig-filename' }]

    render(<TestProviders hasTheme><ImageGrid images={images} user='user1' hasMore /></TestProviders>)

    const image = screen.getByAltText('orig-filename')
    expect(image.src).toBe('http://url/')
  })
})
