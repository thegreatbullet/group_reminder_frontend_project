import React from 'react'

import Head from 'next/head'

import { ThemeProvider } from '@mui/material'

import Header from './generic_components/header/Header'
import Skills from './Components/skills/Skills'
import { theme } from '../styles/mui_modification/mui_modification'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clement - Testimonial</title>
      </Head>
      <Header />
      <Skills />
    </ThemeProvider>
  )
}
