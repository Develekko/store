import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Main() {
  return <>
  <Navbar/>
  <div className="pt-5">
  <Outlet/>
  </div>
  </>
}
