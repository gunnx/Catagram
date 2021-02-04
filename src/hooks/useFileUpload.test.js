import { renderHook, act } from '@testing-library/react-hooks'
import useFileUpload from './useFileUpload'
import * as APIService from '../api'
jest.mock('../api')

describe('useFileUpload', () => {
  afterEach(() => {
    APIService.upload.mockReset()
  })

  it('returns default values', () => {
    const { result } = renderHook(() => useFileUpload())

    expect(result.current.error).toBe(false)
    expect(result.current.currentFile).toBeUndefined()
    expect(result.current.complete).toBe(false)
    expect(result.current.message).toBe('')
    expect(result.current.progress).toBe(0)
  })

  it('updates currentFile when onFileChange is called', () => {
    // eslint-disable-next-line no-undef
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' })
    const fakeEvent = {
      target: {
        files: [fakeFile]
      }
    }
    const { result } = renderHook(() => useFileUpload())

    act(() => {
      result.current.onFileChange(fakeEvent)
    })

    expect(result.current.currentFile).toBe(fakeFile)
  })

  it('returns expected values for successful upload', async () => {
    jest.useFakeTimers()

    APIService.upload.mockImplementation(() => {
      return true
    })

    // eslint-disable-next-line no-undef
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' })
    const fakeEvent = {
      target: {
        files: [fakeFile]
      }
    }

    const { result, waitForNextUpdate } = renderHook(() => useFileUpload('user1'))

    act(() => {
      result.current.onFileChange(fakeEvent)
    })

    await act(async () => {
      result.current.upload()
      await waitForNextUpdate()
      jest.runAllTimers()
    })

    expect(result.current.message).toBe('File uploaded! Redirecting you to home page...')
    expect(result.current.progress).toBe(0)
    expect(result.current.complete).toBe(true)

    jest.useRealTimers()
  })

  it('returns expected values for failed upload', async () => {
    APIService.upload.mockImplementation(() => {
      return false
    })

    // eslint-disable-next-line no-undef
    const fakeFile = new File(['foo'], 'foo.txt', { type: 'text/plain' })
    const fakeEvent = {
      target: {
        files: [fakeFile]
      }
    }

    const { result, waitForNextUpdate } = renderHook(() => useFileUpload('user1'))

    act(() => {
      result.current.onFileChange(fakeEvent)
    })

    await act(async () => {
      result.current.upload()
      await waitForNextUpdate()
    })

    expect(result.current.message).toBe('Unable to upload file, remember only JPG or PNG images of cats allowed!')
    expect(result.current.progress).toBe(0)
    expect(result.current.error).toBe(true)
    expect(result.current.currentFile).toBeUndefined()
  })
})
