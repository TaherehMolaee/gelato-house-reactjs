import React, { type JSX } from 'react'

type LogoProps = {
    size?: 'small' | 'medium' | 'large';
}

const sizes = {
    small: {width: 50, height: 50},
    medium: {width: 100, height: 100},
    large: {width: 150, height: 150}
}

const Logo: React.FC<LogoProps> = ({ size = 'small' }): JSX.Element => {
  return <img src="/assets/images/logo.png" width={sizes[size].width} height={sizes[size].height} />
}

export default Logo
