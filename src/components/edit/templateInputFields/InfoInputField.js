import React from 'react';

export const ContactInputField = ({
  contactInfo,
  setContactInfo,
  name,
  placeholder,
  type,
  children,
  width,
}) => {
  return (
    <div style={{ width }}>
      <div className="mb-5">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {children}
          </div>
          <input
            name={name}
            className="text-base focus:outline-none focus:ring-2 focus:ring-main-300 focus:border-main-500 block w-full pl-10 py-3 border-0 rounded-md placeholder-gray-600"
            type={type}
            value={contactInfo[name]}
            onChange={(e) => setContactInfo({ ...contactInfo, [name]: e.target.value })}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export const MediaInputField = ({
  contactInfo,
  setContactInfo,
  name,
  placeholder,
  type,
  children,
  width,
}) => {
  return (
    <div style={{ width }}>
      <div className="mb-5">
        <div className="mt-1 relative flex rounded-md shadow-sm focus-within:ring-2 focus-within:outline-none focus-within:ring-main-300 focus-within:border-main-500 ">
          <span className="inline-flex items-center px-3 py-3 rounded-l-md bg-gray-50 text-gray-700 sm:text-sm">
            {children}
            http://
          </span>
          <input
            name={name}
            className="flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md focus:outline-none focus:ring-0 text-base border-0 placeholder-gray-600"
            type={type}
            value={contactInfo[name]}
            onChange={(e) => setContactInfo({ ...contactInfo, [name]: e.target.value })}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
