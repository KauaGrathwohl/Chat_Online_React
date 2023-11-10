import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import Router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Router />
    </ConfigProvider>
  </React.StrictMode>,
)
