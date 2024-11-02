import React from 'react'

const LineSvg = ({width}) => {
  return (
    <svg id='line' width={width} height="2"  viewBox={`0 0 ${width} 2`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2={width} y2="1" stroke="#4C8F47" strokeWidth="3" />
    </svg>
  )
}

export default LineSvg