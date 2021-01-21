import favourite from './favourite'
import client from './client'
jest.mock('./client')

describe('api/favourite', () => {
  it('should return id if call successful', async () => {
    const mockReturn = { status: 200, data: { message: 'SUCCESS', id: 1234 } }
    client.post.mockResolvedValue(mockReturn)

    const result = await favourite(1)

    expect(result).toBe(1234)
    expect(client.post.mock.calls[0][1]).toMatchObject({ image_id: 1 })
  })

  it('should return undefined if call successful when passing in valid favouriteId to delete favourite', async () => {
    const mockReturn = { status: 200, data: { message: 'SUCCESS' } }
    client.delete.mockResolvedValue(mockReturn)

    const result = await favourite(1, 'user1', 123)

    expect(result).toBeUndefined()
    expect(client.delete).toBeCalledWith('favourites/123')
  })

  it('should return undefined on a successful call but the data is not in correct format required', async () => {
    const mockReturn = { status: 200, data: { foo: 'bar' } }
    client.post.mockResolvedValue(mockReturn)

    const result = await favourite(1)

    expect(result).toBeUndefined()
  })

  it('should return undefined and call window.alert when exception thrown trying to post vote', async () => {
    client.post.mockRejectedValue({})
    const alertMock = jest.spyOn(window, 'alert')

    const result = await favourite(1)

    expect(result).toBeUndefined()
    expect(alertMock).toHaveBeenCalled()
    expect(alertMock).toHaveBeenCalledWith('Unable to favourite this cat!')
    alertMock.mockClear()
  })

  it('should return `favouriteId` and call window.alert when exception thrown trying to delete vote', async () => {
    client.delete.mockRejectedValue({})
    const alertMock = jest.spyOn(window, 'alert')

    const result = await favourite(1, 'user1', 123)

    expect(result).toBe(123)
    expect(alertMock).toHaveBeenCalled()
    expect(alertMock).toHaveBeenCalledWith('Unable to favourite this cat!')
    alertMock.mockClear()
  })
})
