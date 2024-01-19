// src/App.js
import React from 'react';
import AudioPlayer from './globle/AudioPlayer';
import AudioPlayerSecond from './globle/AudioPlayerSecond';
import audioSrc from "../audio/tune.mp3"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './globle/LanguageSwitcher';

function AudioPage() {
  const { t } = useTranslation();

  return (
    <div className="container vh-100">
      <LanguageSwitcher />
      <div className='row h-100 align-items-center'>
        <div className='col-lg-6 px-5'>
          <h3 className='urduFont'>{t('greeting')}1</h3>
          <AudioPlayer src={audioSrc} />
        </div>
        <div className='col-lg-6 px-5'>
          <h3>{t('greeting')}2</h3>
          <AudioPlayerSecond src={audioSrc} />
        </div>
      </div>
    </div>
  );
}

export default AudioPage;
