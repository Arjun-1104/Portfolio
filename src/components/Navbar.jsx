import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '../data/data'
// import { create } from 'zustand'
import { useAppContext } from '../context/Context' 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const handleActiveNav = create((set) => ({
//   activeNav: 'About',
//   setActiveNav: ()=> set((state)=> ({activeNav: state.activeNav}))
// }))

export default function Navbar() {
  const {activeNav ,setActiveNav} = useAppContext()
  // const {activeNav, setActiveNav} = handleActiveNav;
  return (
    <Disclosure as="nav" className="sticky top-0 bg-black z-10 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#c5ba22]">
              <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden " />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-between ">
            <a href="/">
            <div className="flex shrink-0 items-end gap-2 ">
              <p className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold'>PortFolio</p>
              <div className='bg-[#c5ba22] h-3 w-3 rounded-full  custom_bounce'></div>
            </div>
            </a>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex sm:space-x-2 md:space-x-4">
                {navigation.map((item) => (
                  <a href={item.to}
                    key={item.name}
                    className={classNames(
                      activeNav === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    onClick={()=> setActiveNav(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden border relative">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-neutral-950 w-full absolute">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              className={classNames(
                activeNav === item.name ? 'bg-neutral-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
              onClick={()=> setActiveNav(item.name)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      
    </Disclosure>
  )
}



