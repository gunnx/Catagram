import client from './client'
import FormData from 'form-data'

/**
 * Upload images to user account
 * @param file - binary file of image
 * @param user - used as the 'sub_id'
 * @param onUploadProgress - updates progress of upload
 * @returns {Promise<boolean>}
 */
const upload = async (file, user, onUploadProgress) => {
  const formData = new FormData()

  formData.append('file', file)
  if (user) {
    formData.append('sub_id', user)
  }

  try {
    const response = await client.post('images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })

    return response?.data?.approved === 1
  } catch (error) {
    return false
  }
}

export default upload
