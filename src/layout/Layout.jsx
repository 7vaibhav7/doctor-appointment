

import React from 'react'
 
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'



const Layout = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
   <Header />
   <main>
    <Routers />
   </main>
   <Footer className="text-center bg-gray-200 py-4"/>
   </div>
    </>
  )
}

export default Layout
