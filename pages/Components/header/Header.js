import React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image src='/svg/Portfolio.svg' alt='Logo' height={55} width={120} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Link href='/'>Qualifications</Link>
          </Nav>
          <Nav>
            <Link href='/'>Skills</Link>
          </Nav>
          <Nav>
            <Link href='/'>Mentality</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
