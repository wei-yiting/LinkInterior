import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';

import Logo from '../../utils/logo/Logo';
import { servicesOverviewCollection } from '../../utils/firebase';

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  const [companyName, setCompanyName] = useState('');
  const pages = [
    { name: '已發佈頁面總覽', to: '/services', current: pathname.includes('/service') },
    { name: '我的頁面', to: '/services/', current: pathname === '/intro-compile' },
    {
      name: '頁面建立試用',
      to: '/compile-trial/',
      current: pathname === '/compile-trial',
    },
    {
      name: companyName,
      to: '',
      current: pathname.includes('/service/'),
    },
  ];

  useEffect(() => {
    if (pathname.includes('/service/')) {
      const pageId = pathname.split('/').pop();
      const pageIdToNum = parseInt(pageId, 10);
      servicesOverviewCollection
        .where('companySeqId', '==', pageIdToNum)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCompanyName(doc.data().companyName);
          });
        })
        .catch(() => {
          console.log("can't get company name");
        });
    }
  }, [pathname]);

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
                {page.to ? (
                  <Link
                    to={page.to ? page.to : ''}
                    className="ml-4 text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700 border-b-4 border-white duration-150"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </Link>
                ) : (
                  <div className="ml-4 text-base font-medium text-gray-500 border-b-4 border-white">
                    {' '}
                    {page.name}
                  </div>
                )}
              </div>
            </li>
          ) : null,
        )}
      </ol>
    </nav>
  );
}
