import React from 'react'
import Head from '../components/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import 'isomorphic-fetch'
import Popular from '../components/Popular';
import MainView from '../components/MainView'
import Page from '../components/hocComponents/Page';


const CustomHead = () => (
  <Head title="Home">
    <script src={require("../static/scripts/index.js")}></script>
  </Head>
)

const HomeContent = ({ popular }) => (
  <MainView>
    <Popular popular={popular} />
  </MainView>
)


const HomePage = Page({ PageComponent: HomeContent, Head: CustomHead, isSearchBar: true, http: `${API_URL}` })




export default HomePage
