import React, { FunctionComponent } from 'react'

import '../styles/globals.css'

import Layout from '../components/layout'

type Props = {
Component: FunctionComponent,
pageProps:{}
}

const MyApp:React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
