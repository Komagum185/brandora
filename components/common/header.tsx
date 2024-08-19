'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars4Icon,XMarkIcon } from '@heroicons/react/24/outline'
import { navItems } from '@/data'
import Link from 'next/link'



const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800 h-16">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Brandora</span>
          <Image
            alt=""
            src={"/brandora.png"}
            width={150}
            height={100}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars4Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navItems.map((item) => (
          <Link key={item.name} className="text-sm font-semibold leading-6 text-white" href={item.link}>
            {item.name} </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-extrabold leading-6 text-blue-700">
          Get started <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Brandora</span>
            <Image
            src={'/brandora.png'}
              alt="Brandora"
              className="w-auto"
              width={150}
              height={100}
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navItems.map((item) => (
                <Link
                      key={item.name}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href={item.link}                >
                  {item.name}
               </Link>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-700 hover:bg-gray-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    </header>
  )
}

export default Header



