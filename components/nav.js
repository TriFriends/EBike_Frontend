import React from 'react'
import Link from 'next/link'
import { loadConfig } from '../config/pages'

let pages = []

loadConfig().then((result) => {
  pages = result
  console.log(pages)
})

const Nav = ({ pages }) => (
  <nav>
    <ul>
     
    </ul>
  </nav>
)

export default Nav
