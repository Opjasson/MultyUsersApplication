import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function Layout({children}) {
  return (
    <React.Fragment>
        <Navbar />
        <div className='columns mt-6' style={{ minHeight: "100vh"}}>
            <div className="column is-2">
                <Sidebar />
            </div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout
