import React from 'react'
import Button from '../base/button'

const Header:React.FC = () => {
  return (
    <header>
        <Button>کلیک کن</Button>
        <br />
        <Button varient='outlined'>کلیک کن</Button>
        <br />
        <Button varient='text'>کلیک کن</Button>
    </header>
  )
}

export default Header
