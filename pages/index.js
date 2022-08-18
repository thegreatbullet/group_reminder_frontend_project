import Head from 'next/head'

import Header from './generic_components/header/Header'
import Skills from './Components/skills/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clement - Testimonial</title>
      </Head>
      <Header />
      <Skills />
    </div>
  )
}
