import React from 'react'
import { navigate } from 'gatsby'


export default function Index() {

  return (
    <>
      <h1>KPAULI</h1>
      <main>
        <section className='main-left'  >
          <button onClick={() => navigate('/kpauli')}>TRY</button>
        </section>
        <section className='main-right'>
          
        </section>
      </main>
    </>
  )
}