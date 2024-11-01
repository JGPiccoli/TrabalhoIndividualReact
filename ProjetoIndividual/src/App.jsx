import React from 'react'
import IMC from './components/IMC'

export default function App() {
  return (
    <div>
      <header>Calcule o seu IMC</header>
      <div className='corpo'>
      <IMC/>
      </div>
      <footer>Nome: João Guilherme Piccoli</footer>
    </div>
  )
}
