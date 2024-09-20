import React from 'react'
import i18n from '../../i18n'


export const Switcher = ({t}) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

  return (
    <>
    <button onClick={()=> changeLanguage('es')}>{t('language.spanish')}</button>
    <button onClick={()=> changeLanguage('en')}>{t('language.english')}</button>
    </>
  )
}
