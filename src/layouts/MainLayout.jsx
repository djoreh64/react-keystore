import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
    <Header/>
    <main className="main">
        <Outlet/>
    </main>
    </>
  )
}

export default MainLayout
