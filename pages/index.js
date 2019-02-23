import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import "../static/styles/materialize-v1.0.0/sass/materialize.scss"
import "./index.scss"
import { API_URL } from '../config/consts'
import Categories from '../components/Categories'

const Home = (data) => (
  <div>
    <Head title="Home">

    </Head>
    <div className="hero">
      <img src={require("../static/img/last.png")} className="hero__logo" />
    </div>
    <Categories categories={data.categories} />
  </div>
)

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${API_URL}`)
  const json = await res.json()
  console.log(json)
  return json
}

export default Home
