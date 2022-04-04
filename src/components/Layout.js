import React from 'react';

const Layout = ({children}) => {
  return(
    <main className='w-full h-screen bg-periwinkle-500 relative'>
      {children}
    </main>
  )
}

export default Layout;