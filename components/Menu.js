import React from 'react'
import global from 'window-or-global'
import { Link } from "../routes"
import { MyDropdown } from './DropDown'
import { isChrome } from './helpers/detectBrowser';

class Menu extends React.Component {
    state = {
        isPopUp: false,
        isDropDown: false,
        refs: {
            menuPopUp: React.createRef()
        }
    }

    componentDidMount() {
        process.nextTick(() => {
            window.addEventListener("scroll", function (e) {
                let stickySearch = document.querySelector(".sticky-bottom")
                if (document.querySelector(".menu .pop-up") && window.innerWidth <= 1000) {
                    if (document.querySelector(".hero-wrapper").classList.contains("sticky")) {
                        document.querySelector(".menu .pop-up").style.top = "100px"
                    } else {
                        let heroHeight
                        let hero = document.querySelector(".hero")
                        try {
                            heroHeight = parseInt(window.getComputedStyle(hero, null).getPropertyValue("height"))
                                + "px"
                        } catch (e) {
                            console.log(e)
                            heroHeight = hero.getBoundingClientRect().height + "px"
                        }
                        document.querySelector(".menu .pop-up").style.top = heroHeight
                    }

                    let stickySearchHeight = stickySearch.getBoundingClientRect().height,
                        windowHeight = parseInt(screen.height)

                    if (isChrome() == false) {
                        stickySearch.style.top = windowHeight - stickySearchHeight + "px"
                    } else {
                        if (document.querySelector(".hero-wrapper").classList.contains("sticky") == false) {
                            stickySearch.style.top = windowHeight - 55 - stickySearchHeight + "px"
                        } else {
                            stickySearch.style.top = windowHeight - 0 - stickySearchHeight + "px"
                        }

                    }


                }
            })
        })
    }

    changeIsPopUp() {

        this.setState({
            isPopUp: !this.state.isPopUp
        })
        let hero = document.querySelector(".hero")
        process.nextTick(() => {
            let heroHeight
            try {
                heroHeight = parseInt(window.getComputedStyle(hero, null).getPropertyValue("height")) + "px"
            } catch (e) {
                heroHeight = hero.getBoundingClientRect().height + "px"
            }


            let changeState = () => {
                this.setState({
                    isPopUp: false
                })
                document.body.style.overflow = "scroll"
                document.body.style.overflowX = "hidden"
            }

            if (this.state.isPopUp) {
                this.state.refs.menuPopUp.current.style.top = heroHeight

                document.body.style.overflow = "hidden"

                document.addEventListener("click", function (e) {
                    if (e.target.classList.contains("black") || e.target.classList.contains("pop-up__close")) {
                        changeState()
                    }
                })

                document.querySelector(".menu .pop-up__close").style.left =
                    document.querySelector(".menu .pop-up").getBoundingClientRect().width -
                    document.querySelector(".menu .pop-up__close").getBoundingClientRect().width - 20
                    + "px"
            }
        })

    }

    changeIsDropDown() {
        this.setState({
            isDropDown: !this.state.isDropDown
        })
        let dropDownImg = document.querySelector(".categories-mobile img")
        process.nextTick(() => {
            if (this.state.isDropDown) {
                document.querySelector(".categories-mobile p").style.marginBottom = "10px"
                dropDownImg.style.transform = "rotate(180deg)"
            } else {
                document.querySelector(".categories-mobile p").style.marginBottom = "0px"
                dropDownImg.style.transform = "rotate(0deg)"
            }
        })

    }

    render() {

        return (
            <div className="menu" >
                <img src={require("../static/img/menu.svg")} onClick={this.changeIsPopUp.bind(this)} />
                {
                    this.state.isPopUp ?
                        global.innerWidth > 1000 ?
                            "" :
                            <div className="black"></div>
                        : ""
                }
                {
                    this.state.isPopUp ?
                        global.innerWidth > 1000 ?
                            <div className="">
                                asd
                            </div>
                            :
                            <div className="pop-up" ref={this.state.refs.menuPopUp}>
                                <img src={require("../static/img/delete.svg")} className="pop-up__close" />
                                <div className="pop-up__item">Home</div>
                                <div className="pop-up__item categories-mobile">
                                    <div className="row-space-between" onClick={this.changeIsDropDown.bind(this)}>
                                        <p>Kategorie</p>
                                        <img src={require("../static/img/chevron-arrow-down.svg")} />
                                    </div>
                                    <MyDropdown className="Dropdown" open={this.state.isDropDown}>
                                        {
                                            this.props.categories.map((value, index) => {
                                                console.log(value)
                                                return (
                                                    <div key={index} className="categories__item">
                                                        <Link route="category" category={value.category_name}>
                                                            <a>{value.category_name}</a>
                                                        </Link>
                                                        <img src={process.env.RESOURCE_URL + value.icon} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </MyDropdown>
                                </div>
                                <div className="pop-up__item">Pomoc</div>
                            </div>
                        : ""
                }
            </div>
        )
    }
}

export default Menu