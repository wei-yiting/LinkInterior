import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

import Logo from '../../utils/logo/Logo';

const pages = [
  { name: '我的介紹', to: '/introCompile', current: true },
  { name: '隱世覓境', to: '#', current: false },
];

const Breadcrumbs = () => {
  return (
    <nav className="hidden lg:flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link to="/">
              <div className="flex-shrink-0 h-6 w-6" aria-hidden="true">
                <Logo />
              </div>
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) =>
          page.current ? (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  to={page.to}
                  className="ml-4 text-base font-medium text-gray-500 hover:text-gray-700"
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </Link>
              </div>
            </li>
          ) : null,
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
