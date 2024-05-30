import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CalculFrais from './CalculFrais'
import Verification from './Verification'

export default function Menu() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/calcul' element={<CalculFrais />} />
          <Route path='/verif' element={<Verification />} />
        </Routes>
      </BrowserRouter>

      <ul>
        <li><Link to='/calcul'>Calcul Frais</Link></li>
        <li><Link to='/verif'>Verification</Link></li>
      </ul>
    </div>
  )
}
