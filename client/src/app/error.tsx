'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()} // Try to reset the error boundary and reload the page
        className='mt-4 rounded-lg bg-red-500 px-4 py-2 text-white'
      >
        Try Again
      </button>
    </div>
  )
}
