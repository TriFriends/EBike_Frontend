import React from 'react'
import Link from 'next/link'
import { loadConfig } from '../config/pages'

let pages = []

loadConfig.then((result) => {
  pages = result
})

const Nav = ({ pages }) => (
  <nav>
    <ul>
      {
        pages.map((value, index) => (
          <Link >
            
          </Link>
        ))
      }
    </ul>
  </nav>
)

export default Nav
