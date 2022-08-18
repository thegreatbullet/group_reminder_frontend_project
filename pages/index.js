import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'

import Header from './components/Header'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clement - Testimonial</title>
      </Head>
      <Header />
    </ThemeProvider>
  )
}
