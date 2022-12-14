import React, { PropsWithChildren } from 'react'
import { Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Default: any = ({ children }: any) => {
  // const auth: number[] | string = 'not'
  // const navigate = useNavigate()

  // if (auth !== 'admin') {
  //   return navigate('/login')
  // }

  return (
    <div className='h-vh'>
      <div className='flex'>
        <section className='nav w-60 h-screen bg-amber-400'>
          <h1>sidebar</h1>
        </section>

        <div className='w-full flex-1'>
          <section className='header-nav w-full h-20 bg-blue-400'></section>

          <div className='content pt-4 pl-4 pr-4 relative h-full'>
            {children}

            <Outlet />
            <Loading />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Default
