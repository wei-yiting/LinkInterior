import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { query, where, getDocs } from 'firebase/firestore';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import Logo from '../../utils/logo/Logo';
import { servicesOverviewCollection } from '../../utils/firebase';

// 建立查詢物件

// 讀取資料（保留 Promise 風格）

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  const [companyName, setCompanyName] = useState('');
  const pages = [
    { name: '已發佈頁面總覽', to: '/services', current: pathname.includes('/service') },
    { name: '我的頁面', to: '', current: pathname === '/intro-compile' },
    {
      name: '頁面建立試用',
      to: '',
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
      const q = query(
        servicesOverviewCollection, // 你在 firebase.js 匯出的 collection
        where('companySeqId', '==', pageIdToNum),
      );
      getDocs(q)
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            setCompanyName(doc.data().companyName);
          });
        })
        .catch((err) => {
          console.log("can't get company name", err);
        });
    }
  }, [pathname]);

  return (
    <nav className="flex" aria-label="Breadcrumb">
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
                  <div className="ml-4 text-base font-medium text-gray-500 border-gray-500 border-b-2">
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
