import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Breadcrumbs from './Breadcrumbs';
import TextLogo from '../../utils/logo/TextLogo';

const textLogoStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// const logInStatus = false;

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logOut();
    } catch {
      setError('failed to log out');
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow fixed w-full z-20">
      {() => (
        <>
          <TextLogo style={textLogoStyle}>LinkInterior</TextLogo>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between h-16 relative">
              <Breadcrumbs />

              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {currentUser ? (
                  <>
                    <div className="mr-3 text-base">{currentUser.username}</div>
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
                                  <Link
                                    to="introCompile"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    我的介紹專頁
                                  </Link>
                                )}
                              </Menu.Item>
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
                  <Link to="/logIn">
                    <div>業者登入</div>
                  </Link>
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
