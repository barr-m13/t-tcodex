import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <section className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='text-center px-6'>
        <h1 className='text-7xl font-serif font-bold mb-4'>404</h1>
        <p className='text-xl mb-8'>This Legal Reality Does Not Exist Yet.</p>
        <Link href='/' className='inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200'>
          <ArrowLeftIcon className='h-5 w-5' />
          Return Home
        </Link>
      </div>
    </section>
  )
}
