import upload from './upload'
import client from './client'
jest.mock('./client')

describe('api/upload', () => {
  afterEach(() => {
    client.post.mockReset()
  })

  it('returns true when upload is successful (approved)', async () => {
    const mockReturn = { status: 200, data: { id: 's2geqnEZJ', approved: 1 } }
    client.post.mockResolvedValue(mockReturn)
    const mockFile = 'mockFile'
    const mockProgress = jest.fn()

    const result = await upload(mockFile, undefined, mockProgress)

    expect(result).toBe(true)
  })

  it('returns false when calls fails', async () => {
    client.post.mockRejectedValue({ })
    const mockFile = 'mockFile'
    const mockProgress = jest.fn()

    const result = await upload(mockFile, undefined, mockProgress)

    expect(result).toBe(false)
  })

  it('returns false when the image is not of a cat', async () => {
    const mockReturn = { message: 'Classification failed: correct animal not found.', status: 400 }
    client.post.mockResolvedValue(mockReturn)
    const mockFile = 'mockFile'
    const mockProgress = jest.fn()

    const result = await upload(mockFile, undefined, mockProgress)

    expect(result).toBe(false)
  })

  it('adds user to the request form data', async () => {
    const mockReturn = { status: 200, data: { id: 's2geqnEZJ', approved: 1 } }
    client.post.mockResolvedValue(mockReturn)
    const mockFile = 'mockFile'
    const mockProgress = jest.fn()

    await upload(mockFile, 'user1', mockProgress)

    expect(client.post.mock.calls[0][1].getBuffer().toString()).toContain('user1')
  })
})
