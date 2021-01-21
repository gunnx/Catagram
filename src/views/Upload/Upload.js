import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import ArrowUp from '../../components/Icons/ArrowUp'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import MessageBox from '../../components/MessageBox'
import ProgressBar from '../../components/ProgressBar'
import styled from 'styled-components'
import useFileUpload from '../../hooks/useFileUpload'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
`

const Uploader = styled.div`
  align-items: center;
  border: 2px dotted #6c6c6c;
  display: flex;
  flex-direction: column;
  height: 350px;
  margin: 1rem 0;
  padding: 2rem;
  width: 75%;
  
  button {
    margin: 1rem 0;
  }
`

const SelectedFilename = styled.p`
  font-weight: bold;
`

const FileInput = styled.input`
  visibility: hidden;
`

const Status = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0;
  margin-top: auto;
  width: 100%;
`

const Upload = (props) => {
  const { user } = props
  const {
    complete,
    currentFile,
    error,
    fileRef,
    message,
    onFileChange,
    progress,
    upload
  } = useFileUpload(user)

  return (
    <>
      {complete && <Redirect to='/' />}
      <Heading size={3}>Upload</Heading>
      <Wrapper>
        <Uploader>
          <ArrowUp width={200} height={200} onClick={() => fileRef.current.click()} aria-label='Upload file' />
          <Button name='upload' onClick={() => fileRef.current.click()}>Select file to upload</Button>
          <Status>
            {currentFile && <SelectedFilename>Selected file: {currentFile.name}</SelectedFilename>}
            {progress > 0 && <ProgressBar percent={progress} round />}
            <FileInput
              type='file'
              id='file-upload'
              hidden
              onChange={onFileChange}
              ref={fileRef}
              accept='.jpg, .jpeg, .png'
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'upload_error' : undefined}
            />
            {message && (
              <MessageBox type={error ? 'negative' : 'positive'} alert id='upload_error'>
                <p>{message}</p>
              </MessageBox>)}
          </Status>
        </Uploader>
        <Button
          type='submit'
          name='submit'
          onClick={upload}
          disabled={currentFile === undefined || progress > 0}
        >
          Submit
        </Button>
      </Wrapper>
    </>
  )
}

Upload.propTypes = {
  user: PropTypes.string
}

export default Upload
