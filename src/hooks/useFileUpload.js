import { useState, useRef } from 'react'
import * as APIServices from '../api'

const useFileUpload = (user) => {
  const [currentFile, setCurrentFile] = useState(undefined)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [complete, setComplete] = useState(false)
  const fileRef = useRef(null)

  const onFileChange = (event) => {
    setCurrentFile(event.target.files[0])
  }

  const upload = async () => {
    if (currentFile) {
      setProgress(0)

      const success = await APIServices.upload(currentFile, user, (event) => {
        setProgress(Math.round((100 * event.loaded) / event.total))
      })

      if (success) {
        setMessage('File uploaded! Redirecting you to home page...')
        setProgress(0)

        setTimeout(() => {
          setComplete(true)
        }, 2000)
      } else {
        const errorMessage = 'Unable to upload file, remember only JPG or PNG images of cats allowed!'
        setProgress(0)
        setMessage(errorMessage)
        setError(true)
        setCurrentFile(undefined)
      }
    }
  }

  return {
    complete,
    currentFile,
    error,
    fileRef,
    message,
    onFileChange,
    progress,
    upload
  }
}

export default useFileUpload
