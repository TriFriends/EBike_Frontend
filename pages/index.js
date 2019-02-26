import React from 'react'
import Head from '../components/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import Categories from '../components/Categories'
import 'isomorphic-fetch'
import Router from '../routes'
import UIControl from '../utils/UIControl';
import Popular from '../components/Popular';
import View from '../components/View'
import MainView from '../components/MainView'

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch(`${API_URL}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  homeRoute() {
    Router.Router.pushRoute("home")
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Head title="Home">

        </Head>
        <div className="hero">
          <img src={require("../static/img/last.png")} className="hero__logo" onClick={this.homeRoute} />
        </div>
        <View>
          <Categories categories={this.props.categories} />
          <MainView>
            <Popular popular={this.props.popular} />
          </MainView>
        </View>
      </div>
    )
  }
}


export default Home
