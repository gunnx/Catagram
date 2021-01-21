import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import Upload from './Upload'
import useFileUpload from '../../hooks/useFileUpload'
import TestProviders from '../../mocks/TestProviders'

jest.mock('../../hooks/useFileUpload')

describe('Upload', () => {
  beforeEach(() => {
    useFileUpload.mockImplementation(() => ({}))
  })

  afterEach(() => {
    useFileUpload.mockReset()
  })

  it('renders the upload view components', () => {
    render(<TestProviders hasTheme><Upload /></TestProviders>)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Upload')
    expect(screen.getByRole('button', { name: /select file to upload/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('calls file handler dialog when select file button clicked', () => {
    useFileUpload.mockImplementation(() => {
      return {
        fileRef: {
          current: { click: jest.fn() }
        }
      }
    })

    const { container } = render(<TestProviders hasTheme><Upload /></TestProviders>)

    // file input is hidden so won't be seen by RTL, so using container to query directly
    const input = container.querySelector('#file-upload')
    const clickSpy = jest.spyOn(input, 'click')

    userEvent.click(screen.getByRole('button', { name: /select file to upload/i }))

    expect(clickSpy).toHaveBeenCalled()
  })

  it('calls file handler dialog when arrow icon clicked', () => {
    useFileUpload.mockImplementation(() => {
      return {
        fileRef: {
          current: { click: jest.fn() }
        }
      }
    })

    const { container } = render(<TestProviders hasTheme><Upload /></TestProviders>)

    // file input is hidden so won't be seen by RTL, so using container to query directly
    const input = container.querySelector('#file-upload')
    const clickSpy = jest.spyOn(input, 'click')

    userEvent.click(screen.getByLabelText(/upload file/i))

    expect(clickSpy).toHaveBeenCalled()
  })

  it('displays selected file name after selecting a file', () => {
    // eslint-disable-next-line no-undef
    const mockFile = new File(['cat'], 'cat.png', { type: 'image/png' })
    useFileUpload.mockImplementation(() => {
      return {
        currentFile: mockFile
      }
    })

    render(<TestProviders hasTheme><Upload /></TestProviders>)

    expect(screen.getByText(`Selected file: ${mockFile.name}`)).toBeInTheDocument()
  })

  it('renders the progress bar during while file is uploading', () => {
    useFileUpload.mockImplementation(() => {
      return {
        progress: 45
      }
    })

    render(<TestProviders hasTheme><Upload /></TestProviders>)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('45%')).toBeInTheDocument()
  })

  it('renders a message component when hook returns a message', () => {
    useFileUpload.mockImplementation(() => {
      return {
        message: 'File uploaded'
      }
    })

    render(<TestProviders hasTheme><Upload /></TestProviders>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('File uploaded')).toBeInTheDocument()
  })

  it('renders a message component when hook returns a message that is an error', () => {
    useFileUpload.mockImplementation(() => {
      return {
        message: 'Something went wrong',
        error: true
      }
    })

    const { container } = render(<TestProviders hasTheme><Upload /></TestProviders>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(container.querySelector('#file-upload')).toBeInvalid()
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('redirects to `/` when upload complete', () => {
    useFileUpload.mockImplementation(() => {
      return {
        complete: true
      }
    })

    const history = createMemoryHistory({
      initialEntries: ['/upload'],
      initialIndex: 0
    })

    render(<TestProviders history={history} hasRouter hasTheme><Upload /></TestProviders>)

    expect(history.location.pathname).toBe('/')
  })
})
