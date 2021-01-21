import { renderHook, act } from '@testing-library/react-hooks'
import useVote from './useVote'
import * as APIService from '../api'
jest.mock('../api')

describe('useVote', () => {
  afterEach(() => {
    APIService.vote.mockReset()
    APIService.favourite.mockReset()
  })

  it('return undefined by default', () => {
    const { result } = renderHook(() => useVote('imageId', 'userId'))

    expect(result.current.isFavourite).toBeUndefined()
  })

  it('sets given vote value when call to vote API returns a new Id', async () => {
    APIService.vote.mockImplementation(() => {
      return 'someNewId'
    })

    const { result, waitForNextUpdate } = renderHook(() => useVote('imageId', 'userId'))

    await act(async () => {
      result.current.onVote('newVote')
      await waitForNextUpdate()
    })

    expect(result.current.vote).toBe('newVote')
    expect(APIService.vote).toBeCalledWith('imageId', 'userId', undefined, 'newVote', undefined)
  })

  it('sets vote undefined when call to vote API returns undefined', async () => {
    APIService.favourite.mockImplementation(() => {
      return undefined
    })

    const { result, waitForNextUpdate } = renderHook(() => useVote('imageId', 'userId', { id: 'voteId', value: 1 }))

    await act(async () => {
      result.current.onVote('newVote')
      await waitForNextUpdate()
    })

    expect(result.current.vote).toBeUndefined()
    expect(APIService.vote).toBeCalledWith('imageId', 'userId', 1, 'newVote', 'voteId')
  })
})
