import { render, screen } from '@testing-library/react'
import Home from './Home'
import useFetchCats from '../../hooks/useFetchCats'
import TestProviders from '../../mocks/TestProviders'
jest.mock('../../hooks/useFetchCats')

describe('Home', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('renders loading component while data is being requested for the initial request', () => {
    useFetchCats.mockImplementation(() => {
      return {
        isLoading: true,
        page: 0
      }
    })

    render(<Home />)

    expect(screen.getByLabelText('Loading content. Please wait.')).toBeInTheDocument()
  })

  it('renders error component when error loading data', () => {
    useFetchCats.mockImplementation(() => {
      return {
        isError: true
      }
    })

    render(<Home />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Error fetching images....')
  })

  it('renders image grid empty', () => {
    useFetchCats.mockImplementation(() => {
      return {
        isLoading: false,
        page: 0,
        data: []
      }
    })

    render(<TestProviders hasTheme><Home user='user1' /></TestProviders>)

    expect(screen.getByText('No Cats here yet!')).toBeInTheDocument()
  })
})
