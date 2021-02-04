import { useMemo } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

export const defaultProperties = {
  dark: {
    circle: {
      r: 9
    },
    mask: {
      cx: '50%',
      cy: '23%'
    },
    svg: {
      transform: 'rotate(40deg)'
    },
    lines: {
      opacity: 0
    }
  },
  light: {
    circle: {
      r: 5
    },
    mask: {
      cx: '100%',
      cy: '0%'
    },
    svg: {
      transform: 'rotate(90deg)'
    },
    lines: {
      opacity: 1
    }
  },
  springConfig: { mass: 4, tension: 250, friction: 35 }
}

const DarkModeToggle = (props) => {
  const {
    title,
    isDark = false,
    size = 24,
    animationProperties = defaultProperties,
    moonColor = 'white',
    sunColor = 'black',
    style,
    ...rest
  } = props

  const properties = useMemo(() => {
    if (animationProperties !== defaultProperties) {
      return Object.assign(defaultProperties, animationProperties)
    }

    return animationProperties
  }, [animationProperties])

  const { circle, svg, lines, mask } = properties[isDark ? 'dark' : 'light']

  const svgContainerProps = useSpring({
    ...svg,
    config: animationProperties.springConfig
  })
  const centerCircleProps = useSpring({
    ...circle,
    config: animationProperties.springConfig
  })
  const maskedCircleProps = useSpring({
    ...mask,
    config: animationProperties.springConfig
  })
  const linesProps = useSpring({
    ...lines,
    config: animationProperties.springConfig
  })

  return (
    <animated.svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      color={isDark ? moonColor : sunColor}
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      style={{
        cursor: 'pointer',
        ...svgContainerProps,
        ...style
      }}
      {...rest}
      focusable='false' aria-hidden='true'
    >
      {title && <title>{title}</title>}
      <mask id='myMask2'>
        <rect x='0' y='0' width='100%' height='100%' fill='white' />
        <animated.circle
          style={maskedCircleProps}
          r='9'
          fill='black'
        />
      </mask>

      <animated.circle
        cx='12'
        cy='12'
        fill={isDark ? moonColor : sunColor}
        style={centerCircleProps}
        mask='url(#myMask2)'
      />
      <animated.g stroke='currentColor' style={linesProps}>
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </animated.g>
    </animated.svg>
  )
}

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.number,
  animationProperties: PropTypes.object,
  moonColor: PropTypes.string,
  sunColor: PropTypes.string,
  title: PropTypes.string
}

export default DarkModeToggle
