import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import "../styles/materialize-v1.0.0/sass/materialize.scss"
import "./index.scss"

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
  </div>
)

export default Home
