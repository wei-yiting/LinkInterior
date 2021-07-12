import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Logo from '../../utils/logo/Logo';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];

const Breadcrumbs = () => {
  return (
    <nav className="hidden lg:flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <a href="http://google.com" className="text-gray-400 hover:text-gray-500">
              <div className="flex-shrink-0 h-5 w-5" aria-hidden="true">
                <Logo />
              </div>
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
