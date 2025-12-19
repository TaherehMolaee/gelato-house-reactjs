import React from 'react'
import Button from '../base/button'

const Header: React.FC = () => {
  return (
    <header>
        <Button variant="contained" onClick={() => console.log("Hiii")}>کلیک کنید</Button>
        <Button variant="outlined" onClick={() => console.log("Hiii")}>کلیک کنید</Button>
        <Button variant="text" onClick={() => console.log("Hiii")}>کلیک کنید</Button>
    </header>
  )
}

export default Header
