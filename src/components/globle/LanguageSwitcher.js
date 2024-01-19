// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='pt-4 d-flex justify-content-end'>
      <button className='btn btn-primary me-3' onClick={() => changeLanguage('en')}>English</button>
      <button className='btn btn-primary' onClick={() => changeLanguage('ur')}>اردو</button>
    </div>
  );
};

export default LanguageSwitcher;
