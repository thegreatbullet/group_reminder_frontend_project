import Head from 'next/head'

import Header from './Components/header/Header'
import Qualifications from './Components/Qualifications/Qualifications'
import Timeline from './Components/timeline/Timeline'
import Skills from './Components/skills/Skills'
import { Box } from '@mui/material'
import Languages from './Components/languages/Languages'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clement - Testimonial</title>
      </Head>
      <Header />
      <Timeline />
      <Qualifications />
      <Skills />
      <Languages />
    </div>
  )
}
