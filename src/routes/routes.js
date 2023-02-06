import React from 'react'
import { Route,Routes as Router } from 'react-router-dom'
import Login from '../pages/login'

export function Routes() {
  return (
    <Router>
        <Route path='login' element={<Login/>} />
        </Router>
  )
}
