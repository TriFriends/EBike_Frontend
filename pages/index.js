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
import Menu from '../components/Menu';
import ControlPanel from '../components/ControlPanel';
import Search from '../components/Search';

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
    global.onresize = function () { onResize() }

    let hero = document.querySelector(".hero-wrapper")
    let main = document.querySelector(".main")
    let popular = document.querySelector(".popular")
    let hero_height = hero.offsetHeight
    let hero_margin = parseFloat(getComputedStyle(hero).fontSize)
    let sticky = hero.offsetTop

    onResize()

    function onScroll() {
      if (global.pageYOffset > sticky) {
        hero.classList.add("sticky")
        main.style.marginTop = `${hero_height + hero_margin - 10}px`
      } else {
        hero.classList.remove("sticky");
        main.style.marginTop = '0px'
      }
    }
    function onResize() {
      let popular_width = popular.offsetWidth
      console.log(popular_width / 5)
      let cards = document.querySelectorAll(".card")
      for (let i = 0; i < cards.length; i++) {
        if (global.innerWidth > 1200) {
          cards[i].style.width = popular_width / 5 - 20 + 'px'
        }
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
        <div className="hero-wrapper">
          <div className="container">
            <div className="hero">
              <Menu />
              <img src={require("../static/img/nowy.png")} className="hero__logo" onClick={this.homeRoute} />
              <ControlPanel />
            </div>
          </div>
        </div>
        <Search />
        <View>
          {/* <Categories categories={this.props.categories} /> */}
          <MainView>
            <Popular popular={this.props.popular} />
          </MainView>
        </View>
      </div>
    )
  }
}


export default Home
