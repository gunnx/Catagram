import { render, screen } from '@testing-library/react'

import Heading, { FONT_SIZES } from './Heading'

describe('Heading', () => {
  it.each`
  tag    | size  | fontSize
  ${'h1'} | ${1} | ${FONT_SIZES['1']}
  ${'h2'} | ${2} | ${FONT_SIZES['2']}
  ${'h3'} | ${3} | ${FONT_SIZES['3']}
  ${'h4'} | ${4} | ${FONT_SIZES['4']}
  ${'h5'} | ${5} | ${FONT_SIZES['5']}
`('renders correct $tag and is sized: $fontSize', ({ tag, size, fontSize }) => {
    const { container } = render(<Heading as={tag} size={size}>Header {tag}</Heading>)

    const heading = container.querySelector(tag)
    expect(heading).toBeInTheDocument()
    expect(screen.queryByText(`Header ${tag}`)).toBeInTheDocument()
    expect(heading).toHaveStyle(`font-size: ${fontSize}`)
  })
})
