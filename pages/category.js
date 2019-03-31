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

const Content = ({ products, mainRef }) => {
    return (
        <MainView mainRef={mainRef}>
            <h2>Kategoria</h2>
        </MainView>
    )
}


const CategoryPage = ({ url: { query } }) => {
    let http = `${API_URL}/${query.category}`
    let Component = Page({ PageComponent: Content, Head: CustomHead, isSearchBar: true, http })
    return (
        <React.Fragment>
            <Component />
        </React.Fragment>
    )
}


export default CategoryPage