/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('tonywk')

  console.log(data);


  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen '>
      { isError && <p className='text-center text-red-600'> Something went wrong...</p>}

      <div className='relative w-[560px]'>
        <input  type='text' className='border py-2 px-4 w-full h-[42px] mb-2' placeholder='Search for github user name' />
        <div className='absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur voluptatem ducimus sed esse, iure facere, itaque quo ad, earum culpa illum temporibus sapiente similique nisi obcaecati fuga. Vitae, est.
        </div>
      </div>
    </div>
  )
}
