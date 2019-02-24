import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import Categories from '../components/Categories'

const Home = (data) => (
  <div>
    <Head title="Home">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </Head>
    <div className="hero">

      <img src={require("../static/img/last.png")} className="hero__logo" />
    </div>
    <div className="container">
      <Categories categories={data.categories} />
    </div>
  </div>
)

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${API_URL}`)
  const json = await res.json()
  console.log(json)
  return json
}

export default Home
