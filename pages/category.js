import React from 'react'
import Head from '../components/helpers/head'
import "./index.scss"
import { API_URL } from '../config/consts'
import ProductList from '../components/ProductList';
import MainView from '../components/MainView'
import Page from '../components/hocComponents/Page';


const CustomHead = () => (
    <Head title="Home">
        <script src={require("../static/scripts/index.js")}></script>
    </Head>
)

const Content = ({ popular, mainRef }) => (
    <MainView mainRef={mainRef}>
        <h2>Kategoria</h2>
    </MainView>
)


const HomePage = Page({ PageComponent: Content, Head: CustomHead, isSearchBar: true, http: `${API_URL}` })

export default HomePage