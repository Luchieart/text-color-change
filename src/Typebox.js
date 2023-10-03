import  React, { useState } from 'react';
const Typebox = ({colorValue,setColorValue}) => {

  return (
    <form className='addForm' onSubmit={(e)=>e.preventDefault}>
    <input
    autoFocus
    type='text'
    placeholder='Add color name'
required
value={colorValue}
    onChange={(e)=>setColorValue(e.target.value)}
/>

  </form>
  )
}

export default Typebox