import React from 'react'
import i18n from '../../i18n'
import { useState } from 'react';
import styles from './Switcher.module.css'


export const Switcher = ({ t }) => {
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
  };

  return (
    <div className={styles.container}>
    <label className={styles.switch}>
      <input type="checkbox" checked={isSpanish} onChange={toggleLanguage} />
      <span className={styles.slider}></span>      
    </label>
    <span className={styles.languageLabel}>{isSpanish ? t('language.spanish') : t('language.english')}</span>
    </div>
  );
};
