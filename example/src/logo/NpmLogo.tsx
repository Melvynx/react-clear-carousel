import React from 'react'

export default function NpmLogo({
  width,
  height
}: {
  width?: number
  height?: number
}) {
  return (
    <svg
      width='128'
      height='41'
      viewBox='0 0 180 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M55.3846 57.69H78.4615V46.152H101.538V0H55.3846V57.69ZM78.4615 11.538H90V34.614H78.4615V11.538ZM110.769 0V46.152H133.846V11.538H145.385V46.152H156.923V11.538H168.462V46.152H180V0H110.769ZM0 46.152H23.0769V11.538H34.6154V46.152H46.1538V0H0V46.152Z'
        fill='white'
      />
    </svg>
  )
}
