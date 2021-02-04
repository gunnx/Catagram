
const BlockLoader = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
      {...props}
    >
      <path fill='#7694e4' d='M19 19h20v20H19z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M40 19h20v20H40z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.125s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M61 19h20v20H61z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.25s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M19 40h20v20H19z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.875s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M61 40h20v20H61z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.375s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M19 61h20v20H19z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.75s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M40 61h20v20H40z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.625s'
          calcMode='discrete'
        />
      </path>
      <path fill='#7694e4' d='M61 61h20v20H61z'>
        <animate
          attributeName='fill'
          values='#ffdc9c;#7694e4;#7694e4'
          keyTimes='0;0.125;1'
          dur='1s'
          repeatCount='indefinite'
          begin='0.5s'
          calcMode='discrete'
        />
      </path>
    </svg>
  )
}

export default BlockLoader
