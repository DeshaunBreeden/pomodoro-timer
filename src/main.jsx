import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormDataProvider from './context/FormDataContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormDataProvider>
    <App />
  </FormDataProvider>,
)
