import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'
import Box from '@mui/material/Box'

import { Header, MainApp, Sidebar } from './components/main'
import { GroupsProvider } from './context/group_context'
import { accounts } from './api/accounts.json'

export const AccountsDataContext = React.createContext()

export default function Home() {
  return (
    <GroupsProvider>
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
              <MainApp />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </GroupsProvider>
  )
}
