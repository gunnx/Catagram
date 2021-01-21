import { useTheme } from 'styled-components'

const ArrowUp = (props) => {
  const theme = useTheme()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 433.5 433.5'
      {...props}
      focusable='false' aria-hidden='true'
    >
      <path fill={theme.colors.icon} d='M140.25 331.5h153v-153h102L216.75 0 38.25 178.5h102zM38.25 382.5h357v51h-357z' />
    </svg>
  )
}

export default ArrowUp
