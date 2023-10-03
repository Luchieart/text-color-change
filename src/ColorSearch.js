import React from 'react'


const ColorSearch = ({colorValue}) => {
  return (
  <div className='App' style={{backgroundColor:colorValue}}>
<p className='box_text' >{colorValue?colorValue:'Empty Value'}</p>
  </div>
  )
}

export default ColorSearch