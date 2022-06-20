import React from 'react'
import { AiFillSignal } from "react-icons/ai";
import { TbDeviceDesktop } from "react-icons/tb";
import { RiArrowDropRightFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
function Nav() {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-100%'
    }
  }
  const transition = {
    type: "spring",
    stiffness: 20
  }
  const navToggle = useSelector(state => state.navToggle.navToggle)
  return (
    <div className='md:w-1/4 w-full'>
      {!navToggle &&
        <div
          className='md:mt-5 flex container mx-auto mb-1'>
          <section className='w-full md:mr-6 mr-0 flex flex-col'>
            <Link to='/all' className='md:flex hidden rounded-t-md items-center p-2 py-3 bg-red-600 w-full text-white font-bold rounded-top-xl'>
              <AiFillSignal className='ml-5' /> <p className='ml-1 text-xs'>AHLI HARYTLAR</p>
            </Link>
            <Link to='' className='flex items-center p-2 border-2 md:mt-2 border-b-0'>
              <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>MONITOR</p>
            </Link>
            <div className=''>
              <div className='border-2 h-10 border-b-0 p-2 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                  <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>MONITOR</p>
                </div>
                <RiArrowDropRightFill className='text-2xl opacity-40' />
              </div>
              <div className="hidden p-1 border-2 top-0 right-0 flex flex-col w-full" style={{ right: '0' }}>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>PK ucin korpuslar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Esasy Platalar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Prosesorlar (CPU)</Link>
              </div>
            </div>
            <div className=''>
              <div className='border-2 h-10 border-b-0 p-2 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                  <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>MONITOR</p>
                </div>
                <RiArrowDropRightFill className='text-2xl opacity-40' />
              </div>
              <div className="hidden p-1 border-2 top-0 right-0 flex flex-col w-full" style={{ right: '0' }}>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>PK ucin korpuslar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Esasy Platalar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Prosesorlar (CPU)</Link>
              </div>
            </div>
            <div className=''>
              <div className='border-2 h-10 border-b-0 p-2 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                  <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>MONITOR</p>
                </div>
                <RiArrowDropRightFill className='text-2xl opacity-40' />
              </div>
              <div className="hidden p-1 border-2 top-0 right-0 flex flex-col w-full" style={{ right: '0' }}>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>PK ucin korpuslar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Esasy Platalar</Link>
                <Link to="#" className='py-1 px-2 mx-2 hover:bg-gray-200'>Prosesorlar (CPU)</Link>
              </div>
            </div>
          </section >
        </div >
      }
    </div>
  )
}

export default Nav
