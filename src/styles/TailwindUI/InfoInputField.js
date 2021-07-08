import React from 'react';

export const ContactInputField = ({
  contactInfo,
  setContactInfo,
  name,
  placeholder,
  type,
  children,
}) => {
  return (
    <div className="mb-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {children}
        </div>
        <input
          name={name}
          className="focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500 block w-full pl-10 py-3 sm:text-sm border-gray-300 rounded-md placeholder-gray-600"
          type={type}
          value={contactInfo[name]}
          onChange={(e) => setContactInfo({ ...contactInfo, [name]: e.target.value })}
          placeholder={placeholder}
        />
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
}) => {
  return (
    <div className="mb-5">
      <div className="mt-1 relative flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 py-3 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm">
          {children}
          http://
        </span>
        <input
          name={name}
          className="flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-500 sm:text-sm border-gray-300 placeholder-gray-600"
          type={type}
          value={contactInfo[name]}
          onChange={(e) => setContactInfo({ ...contactInfo, [name]: e.target.value })}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
