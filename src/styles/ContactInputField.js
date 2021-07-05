import React from 'react';

const ContactInputField = ({ placeholder }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        name="email"
        id="email"
        className="p-1 align-middle shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
};

export default ContactInputField;
