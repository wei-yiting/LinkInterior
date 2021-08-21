import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: '回首頁', to: '/', current: false },
  { name: '服務業者總覽', to: '/services', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LandingHamburger() {
  return (
    <Disclosure as="nav" className="fixed flex lg:hidden relative w-full pt-8">
      {({ open }) => (
        <>
          {/* hamburger menu */}
          <div className="absolute inset-y-0 right-0 flex flex-0 items-center lg:hidden h-8">
            <Disclosure.Button className="inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-main-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-8 w-8" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="lg:hidden pt-4 mt-4 bg-white bg-opacity-95 shadow rounded-lg">
            <div className="px-6 pt-2 pb-8 space-y-1 z-30">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? 'text-main-600 font-semibold text-right text-xl'
                      : 'text-gray-500 hover:bg-main-400 hover:text-white text-right text-xl',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
