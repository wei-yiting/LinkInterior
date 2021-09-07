import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Breadcrumbs from './Breadcrumbs';
import TextLogo from '../../utils/logo/TextLogo';

const navigation = [
  { name: '回首頁', to: '/', current: false },
  { name: '服務業者總覽', to: '/services', current: false },
];

const textLogoStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const { pathname } = useLocation();
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logOut();
      history.push('/');
    } catch {
      setError('failed to log out');
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow fixed w-full z-20">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto md:px-4 sm:px-16 lg:px-32 relative h-16">
            <TextLogo style={textLogoStyle}>LinkInterior</TextLogo>

            {/* hamburger menu */}
            <div className="absolute inset-y-0 right-0 mr-4 flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-main-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="md:hidden pt-16 w-full">
              <div className="px-6 pt-2 pb-8 space-y-1 z-30 bg-white bg-opacity-80">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? 'text-main-600 font-semibold text-right text-xl'
                        : 'text-main-600 hover:bg-main-400 hover:text-white text-right text-xl tracking-wider	',
                      'block px-3 py-2 rounded-md text-base font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>

            <div className="hidden md:justify-start md:flex lg:justify-between h-16 relative">
              <Breadcrumbs />

              <div className="hidden lg:ml-6 lg:flex sm:items-center">
                {currentUser ? (
                  <>
                    {pathname.includes('/service') ? null : (
                      <Link to="/services">
                        <div className="mr-12 text-gray-700 tracking-wider hover:border-gray-500 border-b-4 border-white pb-1 duration-150">
                          服務業者總覽
                        </div>
                      </Link>
                    )}
                    {pathname === '/intro-compile' ? null : (
                      <Link to="/intro-compile">
                        <div className="mr-8 text-white bg-main-500 px-5 py-2 rounded-2xl tracking-wider hover:bg-main-600 duration-150">
                          開始建立我的頁面
                        </div>
                      </Link>
                    )}
                    <div className="mr-3 text-base border-b-4 border-white">
                      {currentUser.username}
                    </div>
                    <Menu as="div" className="ml-3 relative">
                      {({ opened }) => (
                        <>
                          <div>
                            <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 items-center">
                              <span className="sr-only">Open user menu</span>
                              {currentUser.profileUrl ? (
                                <img
                                  className="h-9 w-9 rounded-full object-cover"
                                  src={currentUser.profileUrl}
                                  alt=""
                                />
                              ) : (
                                <span className="h-9 w-9 rounded-full overflow-hidden bg-gray-100">
                                  <svg
                                    className="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                              )}
                            </Menu.Button>
                          </div>
                          <Transition
                            show={opened}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    onClick={handleLogout}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block w-full px-4 py-2 text-sm text-left text-gray-700',
                                    )}
                                  >
                                    登出
                                    {error && <span>{error}</span>}
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </>
                ) : (
                  <>
                    {pathname.includes('/service') ? null : (
                      <Link to="/services">
                        <div className="mr-8 text-gray-700 tracking-wider hover:border-gray-500 border-b-4 pb-1 border-white duration-150">
                          服務業者總覽
                        </div>
                      </Link>
                    )}
                    {pathname === '/compile-trial' ? null : (
                      <Link to="/compile-trial">
                        <div className="mr-8 text-white bg-main-500 px-5 py-2 rounded-2xl tracking-wider hover:bg-main-600 duration-150">
                          頁面建立試用
                        </div>
                      </Link>
                    )}
                    {pathname === '/log-in' ? null : (
                      <Link to="/log-in">
                        <div className="mr-4 text-gray-700 tracking-wider hover:border-gray-500 border-b-4 border-white duration-150">
                          登入
                        </div>
                      </Link>
                    )}
                    {pathname === '/sign-up' ? null : (
                      <Link to="/sign-up">
                        <div className="text-gray-700 tracking-wider hover:border-gray-500 border-b-4 border-white duration-150">
                          註冊
                        </div>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
