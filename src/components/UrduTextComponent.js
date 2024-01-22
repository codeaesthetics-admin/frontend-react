import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './globle/LanguageSwitcher';
const UrduTextComponent = ({ handleLogout}) => {
  const { t } = useTranslation();
  const urduText = "آپ کسی بھی اردو متن کو یہاں شامل کر سکتے ہیں۔";

  return (
    <div>
      <div className='container vh-100'>
        <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
          <div className='w-100 d-flex justify-content-end'>
          <LanguageSwitcher />
          <button className='btn btn-primary ms-3 mt-4' onClick={handleLogout}>Logout</button>
          </div>
          <div className='my-auto'>
            <h3 className='urduFont'>{t('greeting')}</h3>
            <p>{urduText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrduTextComponent;
