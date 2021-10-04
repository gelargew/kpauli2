import React from 'react'
import '../styles/commons.components.css'

const Button = ({className='', ...props}: JSX.IntrinsicElements['button']) => {

    return (
        <button className={`button-base ${className}`} {...props}>
            
        </button>
    )
}

export { Button }