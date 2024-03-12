import React from 'react'
import Logo from '../Logo/Logo'



function Footer() {
  return (
    <div>
    <footer className="w-full bg-slate-600 py-5 px-3">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row  md:items-center ">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-gray-600 px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Enter your Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-lg  bg-black px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
          Join
            </button>

          </form>
        </div>
        <div className="">
         
              <ul className="flex items-start justify-center gap-5 md:gap-10 md:flex-row flex-col text-sm font-light text-gray-300 py-5 disabled:text-gray-700">
                <li>Company History</li>
                <li>About us</li>
                <li>Our Team</li>
                <li>Our Vision</li>
                <li>Press Release</li>
              </ul>
       
        </div>
      </div>
    <div className='w-full border-black border mt-5 bg-black'></div>
      <div className="mx-auto  items-center justify-between md:flex p-0 ">
        <div className="inline-flex items-center">
         
          <span className=" "><Logo/></span>
        </div>
        <div className=" ">
          <p className="text-sm font-medium text-gray-300">©blog 2024 . All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
