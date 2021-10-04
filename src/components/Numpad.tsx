import React from 'react'


const NUMBERS = [9, 8, 7, 6, 5, 4, 3, 2, 1]

export default function Numpad() {

    return (
        <div className='numpad' >
            {NUMBERS.map(number => <div key={number} className='numpad-key' >{number}</div>)}
            <div className='numpad-key'>up</div>
            <div className='numpad-key'>0</div>
            <div className='numpad-key'>down</div>
        </div>
    )
}