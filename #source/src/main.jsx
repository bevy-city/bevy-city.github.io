import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import App from './App'
import './index.css'
import i18n from './i18next'
import { I18nextProvider } from 'react-i18next';
import TagManager from 'react-gtm-module'




const tagManagerArgs = {
  gtmId: 'GTM-59WQHC3W',
  dataLayerName: 'PageDataLayer'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
    <App />
   
    </I18nextProvider>
  </React.StrictMode>,
)


