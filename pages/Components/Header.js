import React from 'react'

import HeaderDesktop from './desktop/header/HeaderDesktop'
import HeaderMobile from './mobile/header/HeaderMobile'

export default function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
