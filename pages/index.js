import React from 'react'
import Head from '../components/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import Categories from '../components/Categories'
import 'isomorphic-fetch'
import Router from '../routes'
import Popular from '../components/Popular';
import View from '../components/View'
import MainView from '../components/MainView'
import global from 'window-or-global'

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

  componentDidMount() {
    global.onscroll = function () { onScroll() }

    let hero = document.querySelector(".hero")
    let main = document.querySelector(".main")

    let hero_height = hero.offsetHeight
    let hero_margin = parseFloat(getComputedStyle(hero).fontSize) * 2
    let sticky = hero.offsetTop

    function onScroll() {
      if (global.pageYOffset > sticky) {
        hero.classList.add("sticky")
        main.style.marginTop = `${hero_height + hero_margin}px`
      } else {
        hero.classList.remove("sticky");
        main.style.marginTop = '0px'
      }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Head title="Home">
          <script src={require("../static/scripts/index.js")}></script>
        </Head>
        <div className="hero">
          <img src={require("../static/img/nowy.png")} className="hero__logo" onClick={this.homeRoute} />
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
