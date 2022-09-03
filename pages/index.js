import React from 'react'

import Head from 'next/head'
import fsPromises from 'fs/promises'
import path from 'path'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'

import Box from '@mui/material/Box'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainApp from './components/MainApp'

export const AccountsDataContext = React.createContext()

export default function Home({ objectData }) {
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
            <AccountsDataContext.Provider value='Hello'>
              <MainApp />
            </AccountsDataContext.Provider>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'sample_data/accounts.json')
  const jsonData = await fsPromises.readFile(filePath)
  const objectData = JSON.parse(jsonData)

  return {
    props: objectData,
  }
}
