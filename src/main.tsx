import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
