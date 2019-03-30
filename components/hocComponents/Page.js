import React from 'react'
import SearchBar from '../partialComponents/Search'
import TopBar from '../partialComponents/TopBar'
import global from 'window-or-global'
import 'isomorphic-fetch'

const Page = ({ PageComponent, Head, isSearchBar, http }) => {
    class Page extends React.Component {

        static async getInitialProps({ req }) {
            const res = await fetch(`${http}`)
            const data = await res.json()
            return data
        }

        state = {
            refs: {
                computerSearch: React.createRef(),
                main: React.createRef()
            }
        }

        homeRoute() {
            Router.Router.pushRoute("home")
        }

        componentDidMount() {
            process.nextTick(() => {
                global.onscroll = function () { onScroll(this) }

                let hero = document.querySelector(".hero-wrapper")
                let sticky = hero.offsetTop
                let search = this.state.refs.computerSearch.current
                let main = this.state.refs.main.current
                console.log(main)
                onScroll(this)
                function onScroll(that) {
                    if (global.pageYOffset > sticky) {
                        hero.classList.add("sticky")
                        if (parseInt(global.innerWidth) > 1000) {
                            search.classList.add("sticky")
                            search.style.top = 100 + "px"
                            search.style.marginTop = "10px"
                        } else {
                            search.classList.remove("sticky")
                            search.style.marginTop = "3em"
                        }
                    } else {
                        hero.classList.remove("sticky")
                        search.classList.remove("sticky")
                        search.style.marginTop = "3em"
                    }
                    if (search.classList.contains("sticky") && parseInt(global.innerWidth) > 1000) {
                        main.style.marginTop = search.getBoundingClientRect().top + search.getBoundingClientRect().height + 20 + "px"
                    } else if (search.classList.contains("sticky-bottom") && parseInt(global.innerWidth) <= 1000) {
                        main.style.marginTop = "300px"
                    } else {
                        main.style.marginTop = "0px"
                    }

                }
            })

        }

        render() {
            let { categories, popular } = this.props
            return (
                <React.Fragment>
                    <Head />
                    <TopBar
                        categories={categories}
                        homeRoute={this.homeRoute}
                    />
                    {
                        isSearchBar ?
                            <SearchBar computerSearchRef={this.state.refs.computerSearch} /> :
                            ""
                    }
                    <PageComponent
                        popular={popular}
                        mainRef={this.state.refs.main}
                    />
                </React.Fragment>

            )
        }

    }
    return Page
}

export default Page