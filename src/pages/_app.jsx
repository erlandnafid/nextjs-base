import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/main.scss'

import React from 'react'
import initStore from '@services/stores'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import helper from '@services/helpers'

const MyApp = (props) => {
  const { Component, pageProps, isAuth } = props

  return (
    <Provider store={initStore}>
      <ToastContainer />
      <Component {...pageProps} isAuth={isAuth} />
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const isAuth = helper.isAuthenticated(ctx)

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps, isAuth }
}

export default MyApp
