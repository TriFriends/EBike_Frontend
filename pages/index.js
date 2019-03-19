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

  state = {
    refs: {
      computerSearch: React.createRef(),
      main: React.createRef()
    }

  }

  static async getInitialProps({ req }) {
    const res = await fetch(`${API_URL}`)
    const data = await res.json()
    return data
  }

  homeRoute() {
    Router.Router.pushRoute("home")
  }

  componentDidMount() {
    global.onscroll = function () { onScroll(this) }

    let hero = document.querySelector(".hero-wrapper")
    let popular = document.querySelector(".popular")
    let sticky = hero.offsetTop
    let search = this.state.refs.computerSearch.current
    let main = this.state.refs.main.current

    onScroll(this)
    console.log(search)

    function onScroll(that) {
      if (global.pageYOffset > sticky) {
        hero.classList.add("sticky")
        if (parseInt(global.innerWidth) > 1000) {
          search.classList.add("sticky")
          search.style.top = 100 + "px"
          search.style.marginTop = "10px"
          console.log(search.getBoundingClientRect())
        } else {
          search.classList.remove("sticky")
          search.style.marginTop = "3em"
          console.log(search.getBoundingClientRect().top)
        }
      } else {
        hero.classList.remove("sticky")
        search.classList.remove("sticky")
        search.style.marginTop = "3em"
      }
      if (search.classList.contains("sticky")) {
        main.style.marginTop = search.getBoundingClientRect().top + search.getBoundingClientRect().height + 20 + "px"
      } else {
        main.style.marginTop = "4em"
      }

    }
  }

  render() {
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
        <Search computerSearch={this.state.refs.computerSearch} />
        <View main={this.state.refs.main}>
          <MainView>
            <Popular popular={this.props.popular} />
          </MainView>
        </View>
      </div>
    )
  }
}


export default Home
