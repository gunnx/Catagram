const Logo = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width='1em'
      height='1em'
      {...props}
      focusable='false' aria-hidden='true'
    >
      <path
        d='M30.242 419.627c-3.005 0-6.038-.915-8.656-2.818-6.59-4.787-8.052-14.011-3.264-20.6 11.592-15.956 27.361-25.256 45.603-26.896 16.009-1.439 33.293 3.155 49.988 13.284 8.429 5.115 16.313 6.414 24.108 3.974 11.996-3.758 23.858-16.575 31.732-34.285 3.309-7.444 12.023-10.795 19.469-7.486 7.443 3.309 10.794 12.026 7.485 19.469-11.433 25.717-29.609 44.106-49.869 50.452-15.9 4.982-32.575 2.592-48.227-6.904-31.558-19.147-48.898-4.629-56.424 5.731a14.739 14.739 0 01-11.945 6.079z'
        fill='#eda751'
      />
      <path
        d='M30.242 419.627c-3.005 0-6.038-.915-8.656-2.818-6.59-4.787-8.052-14.011-3.264-20.6 11.592-15.956 27.361-25.256 45.603-26.896 16.009-1.439 33.293 3.155 49.988 13.284 8.429 5.115 16.313 6.414 24.108 3.974 11.996-3.758 23.858-16.575 31.732-34.285 3.309-7.444 12.023-10.795 19.469-7.486 7.443 3.309 10.794 12.026 7.485 19.469-11.433 25.717-29.609 44.106-49.869 50.452-15.9 4.982-32.575 2.592-48.227-6.904-31.558-19.147-48.898-4.629-56.424 5.731a14.739 14.739 0 01-11.945 6.079z'
        fill='#eda751'
      />
      <path
        d='M26.465 386.78a73.783 73.783 0 00-8.143 9.429c-4.788 6.59-3.325 15.814 3.264 20.6a14.681 14.681 0 008.656 2.818 14.73 14.73 0 0011.945-6.082 41.58 41.58 0 015.992-6.64c-3.486-11.863-13.777-17.857-21.714-20.125z'
        fill='#fcd79d'
      />
      <g fill='#eda751'>
        <path d='M202.229 504.501c-.735 0-1.475-.034-2.222-.104-12.977-1.212-22.513-12.714-21.301-25.689 2.702-28.947 4.579-56.201-2.05-71.539-5.17-11.964.338-25.852 12.301-31.023 11.964-5.17 25.852.338 31.024 12.301 11.068 25.61 9.137 58.017 5.716 94.65-1.142 12.228-11.424 21.404-23.468 21.404zM283.011 504.501c-.735 0-1.475-.034-2.222-.104-12.977-1.212-22.513-12.714-21.301-25.689 2.702-28.947 4.579-56.201-2.05-71.539-5.17-11.964.338-25.852 12.302-31.023 11.964-5.17 25.851.338 31.023 12.301 11.068 25.61 9.137 58.017 5.716 94.65-1.141 12.228-11.424 21.404-23.468 21.404zM124.961 347.027c-16.551 0-33.984-4.897-49.699-14.642-29.633-18.375-44.723-49.251-39.382-80.579 2.192-12.848 14.378-21.491 27.228-19.296 12.848 2.19 21.487 14.381 19.297 27.228-2.998 17.585 11.399 28.612 17.729 32.537 13.59 8.426 30.351 10.032 38.995 3.734 10.535-7.675 25.294-5.355 32.968 5.181 7.673 10.535 5.355 25.294-5.181 32.968-11.795 8.593-26.49 12.869-41.955 12.869zM379.657 352.899c-28.126 0-53.851-10.487-65.659-17.606-11.162-6.729-14.755-21.231-8.026-32.393 6.729-11.161 21.235-14.753 32.393-8.026 10.987 6.623 35.996 14.133 54.783 9.215 8.785-2.299 14.909-6.952 19.273-14.642 6.433-11.334 20.838-15.307 32.17-8.874 11.335 6.434 15.308 20.836 8.875 32.171-10.617 18.704-27.341 31.499-48.369 37.003-8.489 2.223-17.071 3.152-25.44 3.152z' />
      </g>
      <g fill='#a35f00'>
        <path
          d='M305.973 302.9c-6.729 11.161-3.137 25.663 8.025 32.393 9.55 5.758 28.204 13.716 49.869 16.55a113.684 113.684 0 002.593-24.18c0-8.084-.857-15.982-2.479-23.623-10.428-2.054-19.911-5.726-25.614-9.164-11.159-6.729-25.665-3.137-32.394 8.024zM308.918 428.183c-.691-14.535-3.025-27.867-8.155-39.737-5.171-11.963-19.06-17.47-31.023-12.3s-17.472 19.06-12.302 31.023c4.038 9.344 4.917 23.113 4.379 38.99 17.135-3.011 33.08-9.234 47.101-17.976zM188.957 376.145c-11.963 5.17-17.471 19.06-12.301 31.023 3.114 7.206 4.351 17.041 4.507 28.445 14.365 6.733 30.248 11.013 47.033 12.236.756-22.305-.85-42.361-8.215-59.403-5.172-11.963-19.061-17.471-31.024-12.301z'
          opacity={0.2}
        />
        <path
          d='M189.222 344.799c-7.446-3.309-16.16.043-19.469 7.486-7.875 17.711-19.736 30.528-31.732 34.285-3.671 1.149-7.363 1.458-11.121.94 5.982 9.79 13.388 18.716 21.943 26.536 19.451-6.902 36.809-24.914 47.863-49.78 3.309-7.443-.041-16.158-7.484-19.467zM139.129 296.009c-5.871 4.277-15.486 4.899-25.308 2.225a113.555 113.555 0 00-3.872 29.428c0 6.215.504 12.32 1.473 18.284a87.533 87.533 0 0013.54 1.081c15.465 0 30.159-4.277 41.955-12.87 10.535-7.673 12.854-22.433 5.181-32.968-7.675-10.534-22.433-12.854-32.969-5.18z'
          opacity={0.2}
        />
      </g>
      <ellipse cx={238.2} cy={327.66} rx={108.84} ry={101.14} fill='#fcd690' />
      <path
        d='M222.31 427.724c-49.738-32.654-34.323-99.581-25.879-128.851v-64.626c-39.378 15.223-67.067 51.312-67.067 93.416-.002 50.839 40.369 92.912 92.946 100.061z'
        opacity={0.15}
        fill='#c17a00'
      />
      <path
        d='M171.967 152.29c21.297-17.871 35.517-47.872 5.477-92.22-30.277-44.699-75.357-55.904-110.55-51.757a22.007 22.007 0 00-18.47 15.498C38.23 57.75 41.436 104.09 80.198 141.67c38.457 37.285 70.472 28.49 91.769 10.62z'
        fill='#eda751'
      />
      <path
        d='M47.007 29.004c-8.358 33.369-3.632 76.966 33.19 112.665 33.334 32.317 61.821 30.008 82.691 17.185C148.535 61.418 85.835 35.58 47.007 29.004z'
        fill='#ff91ab'
      />
      <path
        d='M304.441 152.29c-21.297-17.871-35.518-47.872-5.477-92.22 30.278-44.699 75.357-55.904 110.55-51.757a22.007 22.007 0 0118.47 15.498c10.195 33.939 6.988 80.279-31.774 117.859-38.458 37.285-70.472 28.49-91.769 10.62z'
        fill='#eda751'
      />
      <path
        d='M429.401 29.004c8.358 33.369 3.632 76.966-33.19 112.665-33.334 32.317-61.821 30.008-82.691 17.185 14.353-97.436 77.053-123.274 115.881-129.85z'
        fill='#ff91ab'
      />
      <path
        d='M423.505 179.263c0 84.725-82.962 121.833-185.3 121.833S52.903 263.988 52.903 179.263 135.865 25.855 238.204 25.855c102.339 0 185.301 68.683 185.301 153.408z'
        fill='#ffdc9c'
      />
      <path
        d='M139.263 49.54c-51.896 27.186-86.36 75.119-86.36 129.722 0 72.832 61.306 110.477 143.527 119.61C78.406 228.373 93.798 133.544 139.263 49.54z'
        opacity={0.15}
        fill='#c17a00'
      />
      <g fill='#ff91ab'>
        <ellipse cx={156.72} cy={181.66} rx={33.55} ry={26.72} />
        <ellipse cx={338.57} cy={181.66} rx={33.55} ry={26.72} />
      </g>
      <path
        d='M453.365 310.66l-42.155-4.636c-9.41-1.035-16.199-9.502-15.165-18.911l9.526-86.628c1.035-9.41 9.502-16.199 18.911-15.165l42.155 4.636c9.41 1.035 16.199 9.502 15.164 18.911l-9.526 86.628c-1.033 9.411-9.5 16.2-18.91 15.165z'
        fill='#7694e4'
      />
      <circle cx={425.74} cy={207.41} r={7.14} opacity={0.1} />
      <circle cx={439.9} cy={239.15} r={12.16} fill='#fff' />
      <path
        opacity={0.1}
        d='M472.72 291.45l-76.23-8.389 1.64-14.91 76.23 8.389z'
      />
      <path
        d='M144.158 378.593c18.875 30.029 53.923 50.207 94.047 50.207s75.172-20.178 94.047-50.207H144.158z'
        fill='#dee2e5'
      />
      <path
        d='M144.158 378.593h188.093c5.254-8.359 9.253-17.482 11.76-27.145H132.398c2.507 9.664 6.505 18.786 11.76 27.145z'
        fill='#7694e4'
      />
      <path
        d='M132.398 351.449c2.507 9.664 6.505 18.786 11.76 27.145 16.333 25.984 44.779 44.581 78.141 49.123-28.461-18.693-35.577-48.61-34.88-76.267h-55.021v-.001z'
        opacity={0.1}
      />
      <path d='M452.182 171.769a7.502 7.502 0 008.47-6.386l2.908-20.736a7.5 7.5 0 00-6.386-8.469 7.49 7.49 0 00-8.47 6.386l-2.908 20.736a7.502 7.502 0 006.386 8.469zm-114.231 36.644c8.471 2.249 26.495 11.266 32.795 15.917a7.465 7.465 0 004.448 1.466 7.5 7.5 0 004.46-13.534c-7.662-5.656-27.395-15.569-37.853-18.347a7.5 7.5 0 10-3.85 14.498zm-161.683-72.758a7.5 7.5 0 00-7.5 7.5v11.848c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-11.848a7.5 7.5 0 00-7.5-7.5zm291.19 46.847l-36.464-4.01c-.103-18.507-3.91-36.514-11.134-53.437 20.369-30.476 25.97-67.902 15.308-103.401A29.45 29.45 0 00410.394.865c-35.381-4.172-70.195 6.884-96.314 30.383-23.668-8.447-49.367-12.893-75.875-12.893S186 22.801 162.331 31.248C136.212 7.748 101.395-3.302 66.018.865a29.452 29.452 0 00-24.774 20.789C30.581 57.153 36.183 94.58 56.552 125.055c-7.325 17.158-11.146 35.429-11.146 54.208 0 16.672 3.002 31.957 8.949 45.774a30.927 30.927 0 00-13.192 5.363c-6.776 4.803-11.276 11.958-12.674 20.147-5.864 34.396 10.546 68.198 42.824 88.213 16.635 10.315 35.186 15.768 53.65 15.768.164 0 .336-.009.501-.01a103.75 103.75 0 0010.443 24.85c-.041.013-.084.032-.125.045-5.697 1.783-11.411.757-17.977-3.229-18.075-10.966-36.939-15.927-54.551-14.341-20.462 1.84-38.098 12.199-51 29.957a22.113 22.113 0 00-3.974 16.559 22.107 22.107 0 008.898 14.518 22.088 22.088 0 0013.065 4.251 22.332 22.332 0 0018.013-9.173c10.68-14.7 26.312-15.955 46.466-3.727 17.551 10.648 36.351 13.295 54.359 7.649 6.073-1.902 11.994-4.775 17.671-8.54a117.79 117.79 0 005.096 3.507c3.295 14.942 1.524 38.345-.607 61.167-.772 8.271 1.723 16.347 7.024 22.741 5.303 6.394 12.777 10.341 21.051 11.114.969.09 1.95.136 2.915.136 16.136 0 29.434-12.127 30.935-28.208 1.74-18.627 2.818-33.619 2.693-47.52.78.014 1.561.028 2.346.028 5.508 0 10.926-.368 16.233-1.063.219 13.007-1.05 28.155-2.415 42.772-.772 8.271 1.722 16.347 7.023 22.741 5.303 6.395 12.777 10.342 21.051 11.114.969.09 1.95.136 2.916.136 13.655 0 25.902-9.144 29.783-22.234a7.5 7.5 0 00-14.381-4.264c-2.007 6.771-8.341 11.499-15.403 11.499-.504 0-1.018-.024-1.524-.071a15.994 15.994 0 01-10.896-5.753 15.995 15.995 0 01-3.635-11.773c1.493-16.003 2.874-32.663 2.41-47.068 11.216-2.915 21.756-7.36 31.342-13.085 1.08 10.111 1.213 21.867.425 36.107a7.499 7.499 0 007.495 7.914 7.5 7.5 0 007.482-7.086c1.06-19.15.574-33.774-1.577-46.607 9.271-7.542 17.25-16.432 23.592-26.336a7.44 7.44 0 00.831-1.312c4.808-7.753 8.618-16.108 11.268-24.912 9.996 2.231 19.867 3.378 29.431 3.378 9.533 0 18.731-1.142 27.341-3.396 22.452-5.877 40.415-19.374 52.085-39.043a24.496 24.496 0 0011.571-5.114 24.476 24.476 0 009.078-16.53l9.526-86.629c1.484-13.505-8.295-25.7-21.799-27.185zm-55.5-73.202c-9.401-16.243-22.141-31.206-37.945-44.29a187.362 187.362 0 00-3.143-2.54c17.8-14.261 37.265-21.269 52.728-24.693 3.067 17.089 3.819 43.987-11.64 71.523zm-3.321-93.539a14.457 14.457 0 0111.047 7.525c-18.013 4.072-40.802 12.543-61.343 30.082-8.99-5.995-18.532-11.267-28.524-15.778 30.87-24.234 64.804-23.48 78.82-21.829zm-340.865 0c14.014-1.65 47.949-2.405 78.821 21.829-9.993 4.511-19.535 9.783-28.524 15.778-20.543-17.54-43.332-26.011-61.345-30.083a14.456 14.456 0 0111.048-7.524zM52.809 37.777c15.463 3.425 34.929 10.433 52.729 24.693a187.362 187.362 0 00-3.143 2.54C86.591 78.094 73.851 93.057 64.45 109.3 48.992 81.764 49.744 54.866 52.809 37.777zm69.745 301.706c-14.877-.453-29.809-5.082-43.339-13.471-26.987-16.734-40.76-44.685-35.941-72.943a15.996 15.996 0 016.561-10.432 15.98 15.98 0 0112.013-2.733c.157.027.314.071.472.103 3.701 5.756 8.006 11.202 12.91 16.33a16.022 16.022 0 01-.215 2.143c-1.254 7.353-1.7 25.987 21.169 40.171 8.673 5.376 18.634 8.38 27.718 8.643a102.181 102.181 0 00-2.038 20.37c-.002 3.992.237 7.935.69 11.819zm5.677-47.339c-7.076.867-16.456-1.475-24.144-6.242-8.672-5.379-12.409-11.251-13.82-16.267 11.03 8.323 23.879 15.371 38.501 21.082-.184.475-.36.951-.537 1.427zm16.365 115.418c-13.782 4.318-28.336 2.189-42.095-6.16-38.065-23.096-59.103-2.284-66.381 7.734a7.188 7.188 0 01-5.878 2.991c-1.531 0-3-.479-4.248-1.386-3.234-2.349-3.954-6.892-1.605-10.125 10.282-14.152 24.185-22.393 40.208-23.834 14.399-1.29 30.108 2.933 45.426 12.226 10.23 6.209 20.405 7.797 30.239 4.72a36.562 36.562 0 004.306-1.667 111.805 111.805 0 0010.076 11.11c-3.293 1.848-6.651 3.327-10.048 4.391zm73.634 74.835c-.777 8.326-7.656 14.603-16.001 14.603-.504 0-1.018-.024-1.524-.071a15.994 15.994 0 01-10.896-5.753 15.994 15.994 0 01-3.636-11.772c1.818-19.475 3.272-38.238 2.037-53.659a120.937 120.937 0 0021.992 7.366c.091.02.181.045.272.062 3.401.78 6.859 1.424 10.369 1.916.205 13.646-.861 28.55-2.613 47.308zm-9.016-65.007c-19.99-5.524-37.405-16.605-50.138-31.297h68.892c-4.364 10.225-11.083 22.077-18.754 31.297zm28.989 3.911c-4.238 0-8.414-.245-12.516-.714 3.208-4.454 6.157-9.151 8.788-13.85 5.341 1.892 13.468 6.041 18.344 13.587-4.774.639-9.653.977-14.616.977zm29.952-4.175c-6.058-13.095-18.033-20.327-26.965-23.837a128.918 128.918 0 002.92-7.195h73.224c-12.531 14.456-29.592 25.421-49.179 31.032zm59.808-46.032H148.445a89.684 89.684 0 01-5.759-12.146H333.72a89.49 89.49 0 01-5.757 12.146zm10.045-27.145H138.4a86.946 86.946 0 01-1.538-16.287c0-9.107 1.388-18.006 4.137-26.579.055-.155.112-.31.157-.468a87.801 87.801 0 011.788-4.955c10.308 3.206 21.343 5.851 33.118 7.899a7.502 7.502 0 008.674-6.104 7.499 7.499 0 00-6.104-8.674c-13.36-2.324-25.671-5.433-36.922-9.294a7.474 7.474 0 00-1.13-.381c-19.096-6.681-35.058-15.577-47.687-26.61a104.531 104.531 0 01-4.994-4.667c-.047-.047-.093-.094-.141-.139-18.154-18.151-27.355-41.133-27.355-68.427 0-80.454 79.761-145.907 177.8-145.907 97.782 0 177.373 65.111 177.792 145.273-9.402 2.633-16.748 10.753-17.879 21.037l-4.717 42.898c-13.59 15.654-33.146 27.955-57.629 36.554a7.47 7.47 0 00-1.178.414c-26.786 9.219-59.355 14.065-96.39 14.065a390.61 390.61 0 01-25.747-.834c-4.097-.264-7.705 2.852-7.98 6.986a7.5 7.5 0 006.986 7.981c8.661.576 17.658.868 26.741.868 35.925 0 68.034-4.454 95.247-12.968a88.691 88.691 0 011.287 3.453l.062.186a86.66 86.66 0 014.748 28.395c0 5.552-.529 10.994-1.538 16.285zm9.854-52.663c-.082-.214-.168-.427-.251-.64 16.722-6.554 31.234-14.836 43.223-24.743l-2.242 20.39a24.542 24.542 0 001.242 10.881c-14.048 3.086-31.655-1.419-41.972-5.888zm55.338 51.206c-14.94 3.909-32.076 3.825-49.728-.108a101.993 101.993 0 001.072-14.722c0-6.317-.579-12.546-1.711-18.661 8.413 2.49 17.878 4.141 27.012 4.141 5.267 0 10.426-.548 15.202-1.798a44.755 44.755 0 004.817-1.556 24.54 24.54 0 0010.526 3.691l31.364 3.449c-9.498 12.629-22.659 21.404-38.554 25.564zm71.147-134.445l-9.526 86.629a9.572 9.572 0 01-3.552 6.467 9.557 9.557 0 01-6.102 2.119 7.593 7.593 0 00-.6-.034c-.128-.009-.255-.009-.383-.024l-42.155-4.635a9.564 9.564 0 01-5.772-2.779c-.046-.047-.089-.097-.137-.142a9.58 9.58 0 01-2.62-7.715l4.559-41.464.005-.041 4.961-45.122c.548-4.984 4.832-8.663 9.743-8.582.075.006.148.018.224.022.05.002.098-.002.147 0 .174.01.348.011.523.031l42.154 4.636c5.285.58 9.112 5.351 8.531 10.634zm-320.861-14.131c-10.457 2.777-30.19 12.689-37.854 18.347a7.5 7.5 0 008.908 12.068c6.301-4.651 24.326-13.669 32.796-15.917a7.5 7.5 0 00-3.85-14.498zm347.556-40.806a7.5 7.5 0 00-10.51 1.425l-12.853 16.886a7.498 7.498 0 001.426 10.51 7.464 7.464 0 004.536 1.533 7.489 7.489 0 005.974-2.958l12.853-16.886a7.5 7.5 0 00-1.426-10.51zm-153.371 30.487c8.69-1.147 28.789.32 36.385 2.219a7.506 7.506 0 001.825.226 7.5 7.5 0 001.814-14.778c-9.242-2.311-31.266-3.958-41.988-2.539a7.5 7.5 0 00-6.453 8.418c.542 4.108 4.325 6.993 8.417 6.454zm47.688-18.756a7.481 7.481 0 005.567 2.473 7.47 7.47 0 005.025-1.935 7.5 7.5 0 00.538-10.593l-12.46-13.793a7.5 7.5 0 00-11.131 10.055l12.461 13.793zm-247.743 18.756c4.092.539 7.875-2.346 8.418-6.453a7.5 7.5 0 00-6.453-8.418c-10.727-1.417-32.748.228-41.989 2.539a7.5 7.5 0 103.639 14.552c7.596-1.9 27.697-3.369 36.385-2.22zm171.402-21.094a7.5 7.5 0 007.5-7.5v-11.848a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v11.848a7.5 7.5 0 007.5 7.5zm-64.877 15.908l-12.54-3.439a7.496 7.496 0 00-9.216 5.249 7.5 7.5 0 005.249 9.217l12.539 3.439c1.566.43 3.135.638 4.674.638 6.064 0 11.657-3.229 14.753-8.832 3.88-7.025 2.511-15.387-3.406-20.806-.048-.044-.176-.161-.176-.399 0-.238.128-.355.175-.399 5.918-5.42 7.287-13.782 3.407-20.806-3.881-7.025-11.689-10.319-19.426-8.195l-12.54 3.439a7.5 7.5 0 103.967 14.466l12.541-3.439c.383-.105 1.551-.424 2.328.982.777 1.407-.115 2.224-.409 2.493a15.579 15.579 0 00-5.043 11.46 15.58 15.58 0 005.044 11.461c.293.268 1.186 1.086.408 2.493-.778 1.402-1.945 1.084-2.329.978z' />
    </svg>
  )
}

export default Logo