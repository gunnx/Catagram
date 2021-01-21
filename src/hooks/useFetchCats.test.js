import { act, renderHook } from '@testing-library/react-hooks'
import useFetchCats from './useFetchCats'
import client from '../api/client'

jest.mock('../api/client')

describe('useFetchCats', () => {
  it('returns valid results for empty response', async () => {
    const data = []
    client.get.mockImplementation(() => {
      return {
        data
      }
    })

    const { result, waitForNextUpdate } = renderHook(() => useFetchCats('user1'))

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.data).toBe(data)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
    expect(result.current.page).toBe(0)
    expect(result.current.total).toBe(0)
    expect(result.current.hasMore).toBe(false)
  })

  it('returns isError true if api call fails', async () => {
    client.get.mockRejectedValue({})

    const { result, waitForNextUpdate } = renderHook(() => useFetchCats('user1'))

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.isError).toBe(true)
  })

  it('returns the total value which comes in the headers response', async () => {
    client.get.mockImplementation(() => {
      return {
        headers: {
          'pagination-count': 10
        }
      }
    })

    const { result, waitForNextUpdate } = renderHook(() => useFetchCats('user1'))

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.total).toBe(10)
  })

  it('returns hasMore true if more results than what has been returned', async () => {
    client.get.mockImplementation(() => {
      return {
        headers: {
          'pagination-count': 20
        }
      }
    })

    const limit = 10

    const { result, waitForNextUpdate } = renderHook(() => useFetchCats('user1', limit))

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.total).toBe(20)
    expect(result.current.hasMore).toBe(true)
  })

  it('merges existing data when fetching more results', async () => {
    const firstData = ['foo']
    const secondData = ['bar']
    client.get
      .mockImplementationOnce(() => {
        return {
          data: firstData,
          headers: {
            'pagination-count': 20
          }
        }
      })
      .mockImplementationOnce(() => {
        return {
          data: secondData,
          headers: {
            'pagination-count': 20
          }
        }
      })

    const limit = 10

    const { result, waitForNextUpdate } = renderHook(() => useFetchCats('user1', limit))

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.data).toBe(firstData)

    await act(async () => {
      await result.current.fetchMore()
    })

    expect(result.current.data).toEqual([...firstData, ...secondData])
  })
})
