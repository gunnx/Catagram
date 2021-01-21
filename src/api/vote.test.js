import vote from './vote'
import client from './client'
jest.mock('./client')

describe('api/vote', () => {
  afterEach(() => {
    client.post.mockReset()
    client.delete.mockReset()
  })
  it('should return id if call successful when posting a vote', async () => {
    const mockReturn = { status: 200, data: { message: 'SUCCESS', id: 1234 } }
    client.post.mockResolvedValue(mockReturn)

    const result = await vote(1, 'user1', undefined, 0)

    expect(result).toBe(1234)
    expect(client.post.mock.calls[0][1]).toMatchObject({ image_id: 1, value: 0 })
  })

  it('should return undefined when call successful to delete vote with given `voteId`', async () => {
    const mockReturn = { status: 200, data: { message: 'SUCCESS' } }
    client.delete.mockResolvedValue(mockReturn)
    const result = await vote(1, 'user1', 0, 0, 2)

    expect(result).toBeUndefined()
    expect(client.delete).toHaveBeenCalled()
    expect(client.delete).toHaveBeenCalledWith('votes/2')
  })

  it('should return undefined on a successful call but the data is not in correct format required', async () => {
    const mockReturn = { status: 200, data: { foo: 'bar' } }
    client.post.mockResolvedValue(mockReturn)

    const result = await vote(1)

    expect(result).toBeUndefined()
  })

  it('should return undefined if no `voteId` given and call window alert when exception thrown', async () => {
    client.post.mockRejectedValue({})
    const alertMock = jest.spyOn(window, 'alert')

    const result = await vote(1, 'user1', undefined, 0)

    expect(result).toBeUndefined()
    expect(alertMock).toHaveBeenCalledWith('Unable to change vote for this cat!')
  })

  it('should return given `voteId` and call window alert when exception thrown trying to delete vote', async () => {
    client.delete.mockRejectedValue({})
    const alertMock = jest.spyOn(window, 'alert')
    const result = await vote(1, 'user1', undefined, 0, 999)

    expect(result).toBe(999)
    expect(alertMock).toHaveBeenCalled()
    expect(alertMock).toHaveBeenCalledWith('Unable to change vote for this cat!')
    alertMock.mockClear()
  })

  it('only deletes vote and not post a new vote if status is unchanged', async () => {
    const mockReturn = { status: 200, data: { message: 'SUCCESS' } }
    client.delete.mockResolvedValue(mockReturn)

    const result = await vote(1, 'user1', 1, 1, 999)

    expect(result).toBeUndefined()
    expect(client.delete).toHaveBeenCalled()
    expect(client.delete).toHaveBeenCalledWith('votes/999')
    expect(client.post).not.toBeCalled()
  })
})
