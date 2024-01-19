import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import AudioPage from '../components/AudioPage'
import UrduTextComponent from '../components/UrduTextComponent'

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Login />
        </>
      }>
      </Route>

      <Route path="/audio" element={
        <>
          <AudioPage />
        </>
      }>
      </Route>
      <Route path="/urdutext" element={
        <>
          <UrduTextComponent />
        </>
      }>
      </Route>
    </Routes>

  )
}
