import React, { useLayoutEffect, useRef } from 'react'
import Numpad from '../components/Numpad'
import '../styles/kpauli.css'


const NUMBERS = new Array(5000).fill(0)

export default function Kpauli() {
    const d = useRef<HTMLDivElement>()
    const kp = useRef<HTMLDivElement>()
    const scaleNumbers = (e:React.WheelEvent) => {
        console.log(e)
    }

    const getXY = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
   
        const x = e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left; //x position within the element.
        
        const y = e.clientY - e.currentTarget.getBoundingClientRect().top;  //y position within the element.
        console.log(x, y)
 
    }

    useLayoutEffect(() => {
        const rect = kp.current.getBoundingClientRect()
        kp.current.scrollBy(-5000, 0)
    }, [])

    return (
       <main>
           <section id='numbers' >
                <div className='the-input' ref={d}></div>
               <div ref={kp} className='numbers' onWheel={scaleNumbers} >
                    
                   {new Array(50).fill(0).map((num, i) =>
                        <React.Fragment key={i}>
                            <div>{new Array(100).fill(i%10).join('')}</div>
                            <div className='numbers-inputs' onClick={getXY} >
                                {' '.repeat(99)}
                            </div>
                        </React.Fragment> 
                        
                         )}
               </div>
            </section>
           <section>
               <Numpad />
           </section>
       </main> 
    )
}


