import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.scss'

import React from 'react'
import initStore from '@services/redux'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const MyApp = (props) => {
  const { Component, pageProps, isAuth } = props

  return (
    <Provider store={initStore}>
      <ToastContainer />
      <Component {...pageProps} isAuth={true} />
    </Provider>
  )
}

export default MyApp
