import Head from 'next/head'

import Header from './Components/header/Header'
import Timeline from './Components/timeline/Timeline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clement - Testimonial</title>
      </Head>
      <Header />
      <Timeline />
    </div>
  )
}
