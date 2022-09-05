import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'

import Box from '@mui/material/Box'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainApp from './components/MainApp'

import { accounts } from './api/accounts.json'

export const AccountsDataContext = React.createContext()

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Head>
          <title>LOGO - Homepage</title>
        </Head>

        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component='main'
            sx={{ flexGrow: 1, bgcolor: 'background.default' }}
          >
            <Header />
            <AccountsDataContext.Provider value={accounts}>
              <MainApp />
            </AccountsDataContext.Provider>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
