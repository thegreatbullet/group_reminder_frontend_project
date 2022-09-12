import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/mui_modification/fonts_modification'
import Box from '@mui/material/Box'

import { Header, MainApp, Sidebar } from './components/main'
import { GroupsProvider } from './context/group_context'

import { loadGroups } from './api/groups_data'

export default function Home({ groups }) {
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
              <MainApp groupsData={groups} />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </GroupsProvider>
  )
}

export async function getStaticProps() {
  const groups = await loadGroups()

  // Props returned will be passed to the page component
  return { props: { groups } }
}
