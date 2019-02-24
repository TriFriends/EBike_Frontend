import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import Categories from '../components/Categories'
import 'isomorphic-fetch'
import Router from '../routes'
import UIControl from '../utils/UIControl';

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch(`${API_URL}`)
    const data = await res.json()
    return data
  }

  homeRoute() {
    Router.Router.pushRoute("home")
  }

  render() {
    return (
      <div>
        <Head title="Home">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </Head>
        <div className="hero">
          <img src={require("../static/img/last.png")} className="hero__logo" onClick={this.homeRoute} />
        </div>
        <div className="container">
          <Categories categories={this.props.categories} />
        </div>
      </div>
    )
  }
}


export default Home
