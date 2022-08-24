import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'

import Box from '@mui/material/Box'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainApp from './components/MainApp'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Head>
          <title>LOGO - Homepage</title>
        </Head>
        <Header />
        <Sidebar />
        <MainApp />
      </Box>
    </ThemeProvider>
  )
}
