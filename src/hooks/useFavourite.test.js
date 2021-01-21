import { renderHook, act } from '@testing-library/react-hooks'
import useFavourite from './useFavourite'
import * as APIService from '../api'
jest.mock('../api')

describe('useFavourite', () => {
  afterEach(() => {
    APIService.favourite.mockReset()
  })
  it('return false by default', () => {
    const { result } = renderHook(() => useFavourite('test', 'userId'))

    expect(result.current.isFavourite).toBe(false)
  })

  it('sets favourite true when call to favourite returns a new ID', async () => {
    APIService.favourite.mockImplementation(() => {
      return 'someNewId'
    })

    const { result, waitForNextUpdate } = renderHook(() => useFavourite('imageId', 'userId'))

    await act(async () => {
      result.current.onFavourite()
      await waitForNextUpdate()
    })

    expect(result.current.isFavourite).toBe(true)
    expect(APIService.favourite).toBeCalledWith('imageId', 'userId', undefined)
  })

  it('sets favourite false when call to favourite returns undefined', async () => {
    APIService.favourite.mockImplementation(() => {
      return undefined
    })

    const { result, waitForNextUpdate } = renderHook(() => useFavourite('imageId', 'userId', 'favId'))

    await act(async () => {
      result.current.onFavourite()
      await waitForNextUpdate()
    })

    expect(result.current.isFavourite).toBe(false)
    expect(APIService.favourite).toBeCalledWith('imageId', 'userId', 'favId')
  })
})
