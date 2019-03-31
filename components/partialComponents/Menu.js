import React from 'react'
import global from 'window-or-global'
import { Link } from "../../routes"
import { MyDropdown } from '../helpers/DropDown'
import { isChrome } from '../helpers/detectBrowser';
import Router from '../../routes'


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

    componentWillUnmount() {
        this.setState({
            isPopUp: false,
            isDropDown: false,
            refs: {
                menuPopUp: React.createRef()
            }
        })
        document.body.style.overflow = "scroll"
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
                this.setState({
                    isDropDown: false
                })
            }

            if (this.state.isPopUp) {
                document.body.style.overflow = "hidden"
                if (this.state.refs.menuPopUp.current) {
                    this.state.refs.menuPopUp.current.style.top = heroHeight

                    document.addEventListener("click", function (e) {
                        if (e.target.classList.contains("black") || e.target.classList.contains("pop-up__close")) {
                            changeState()
                        }
                    })

                    document.querySelector(".menu .pop-up__close").style.left =
                        document.querySelector(".menu .pop-up").getBoundingClientRect().width -
                        document.querySelector(".menu .pop-up__close").getBoundingClientRect().width - 30
                        + "px"


                    let popUpDown = document.querySelector(".menu .pop-up__down"),
                        popUpDownPos = 0,
                        menuPopUp = this.state.refs.menuPopUp.current,
                        popUpChilds = menuPopUp.childNodes
                    for (let i = 0; i < popUpChilds.length; i++) {
                        if (!popUpChilds[i].classList.contains("pop-up__down")) {
                            popUpDownPos += popUpChilds[i].getBoundingClientRect().height
                        }
                    }
                    popUpDownPos = menuPopUp.getBoundingClientRect().height - popUpDownPos - popUpDown.getBoundingClientRect().height - 60
                    popUpDown.style.top = popUpDownPos + "px"

                    if (window.innerHeight <= 600) {
                        document.querySelector(".menu .pop-up").style.maxHeight = "350px"
                    }
                } else {

                    let searchComputer = document.querySelector(".search-computer")
                    if (!searchComputer.classList.contains("sticky")) {
                        searchComputer.classList.add("sticky")
                        searchComputer.style.top = document.querySelector(".hero").getBoundingClientRect().height + "px"
                        searchComputer.style.marginTop = "0px"
                    }

                    document.querySelector(".pop-up-desktop").style.top = searchComputer.getBoundingClientRect().top
                        + searchComputer.getBoundingClientRect().height
                        + 10 + "px"

                    document.querySelector(".pop-up-desktop").style.left = searchComputer.getBoundingClientRect().left + "px"
                    document.querySelector(".menu .pop-up__close").style.left =
                        document.querySelector(".menu .pop-up-desktop").getBoundingClientRect().width -
                        document.querySelector(".menu .pop-up__close").getBoundingClientRect().width - 30
                        + "px"
                    document.querySelector(".menu .pop-up__close").style.top = "20px"
                    document.querySelector(".menu .pop-up__close").style.position = "absolute"

                    document.addEventListener("click", function (e) {
                        if (e.target.classList.contains("black") || e.target.classList.contains("pop-up__close")) {
                            changeState()
                            if (!document.querySelector(".hero-wrapper").classList.contains("sticky")) {
                                searchComputer.classList.remove("sticky")
                                searchComputer.style.marginTop = "3em"
                            }
                        }
                    })
                }
                //console.log(1300 - parseInt(window.innerWidth) / 2)
                try {
                    if (window.innerWidth > 1300) {
                        //document.querySelector(".black").style.left = `-${1300 - window.innerWidth / 2}px`
                        document.querySelector(".black").style.left = `${-(document.querySelector(".black").parentElement.getBoundingClientRect().x) + 10}px`
                        document.querySelector(".black").style.minWidth = "100vw"
                        document.querySelector(".black").style.width = "100vw"
                    }

                    document.querySelector(".pop-up-desktop").style.left =
                        document.querySelector(".search").getBoundingClientRect().x
                        - document.querySelector(".menu").getBoundingClientRect().x + 10 + "px"
                } catch (e) {
                    console.log(e)
                }

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
                if (this.state.refs.menuPopUp) {
                    document.querySelector(".categories-mobile p").style.marginBottom = "10px"
                    dropDownImg.style.transform = "rotate(180deg)"
                    document.querySelector(".menu .pop-up__down").style.top = 20 + "px"
                }

            } else {
                if (this.state.refs.menuPopUp) {
                    document.querySelector(".categories-mobile p").style.marginBottom = "0px"
                    dropDownImg.style.transform = "rotate(0deg)"
                    setTimeout(() => {
                        let popUpDown = document.querySelector(".menu .pop-up__down"),
                            popUpDownPos = 0,
                            menuPopUp = this.state.refs.menuPopUp.current,
                            popUpChilds = menuPopUp.childNodes
                        for (let i = 0; i < popUpChilds.length; i++) {
                            if (!popUpChilds[i].classList.contains("pop-up__down")) {
                                popUpDownPos += popUpChilds[i].getBoundingClientRect().height
                            }
                        }
                        popUpDownPos = menuPopUp.getBoundingClientRect().height - popUpDownPos - popUpDown.getBoundingClientRect().height - 60
                        popUpDown.style.top = popUpDownPos + "px"
                    }, 300)

                }

            }
        })

    }

    changeRoute(route) {
        Router.pushRoute("category", { category: route })
    }

    render() {
        return (
            <div className="menu" >
                <img src="static/img/menu.svg" onClick={this.changeIsPopUp.bind(this)} />
                {
                    this.state.isPopUp ?
                        <div className="black"></div>
                        : ""
                }
                {
                    this.state.isPopUp ?
                        global.innerWidth > 1000 ?
                            <div className="pop-up-desktop">
                                <h2>Kategorie</h2>
                                <img src="static/img/delete.svg" className="pop-up__close" />
                                <div className="categories-dekstop">
                                    {
                                        this.props.categories.map((value, index) => (
                                            <CategoriesItem
                                                key={index}
                                                category={value}
                                                changeRoute={this.changeRoute}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <div className="pop-up" ref={this.state.refs.menuPopUp}>
                                <img src="static/img/delete.svg" className="pop-up__close" />
                                <div className="pop-up__item">Home</div>
                                <div className="pop-up__item categories-mobile">
                                    <div className="row-space-between" onClick={this.changeIsDropDown.bind(this)}>
                                        <p>Kategorie</p>
                                        <img src="static/img/chevron-arrow-down.svg" />
                                    </div>
                                    <MyDropdown className="Dropdown" open={this.state.isDropDown}>
                                        {
                                            this.props.categories.map((value, index) =>
                                                (
                                                    <CategoriesItem
                                                        key={index}
                                                        category={value}
                                                        changeRoute={this.changeRoute}
                                                    />
                                                )
                                            )
                                        }
                                    </MyDropdown>
                                </div>
                                <div className="pop-up__item">Pomoc</div>
                                <div className="pop-up__down">
                                    <Link route="login">
                                        <a>
                                            <span>Zaloguj</span>
                                            <img src="static/img/user.svg" />
                                        </a>
                                    </Link>
                                    <Link route="register">
                                        <a>
                                            <span>Zarejestruj</span>
                                            <img src="static/img/sign-in.svg" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        : ""
                }
            </div>
        )
    }
}

const CategoriesItem = ({ key, category, changeRoute }) => (
    <div
        className="categories-desktop__item"
        key={key}
        onClick={(e) => changeRoute(`${category.category_name.replace(" ", "-").toLowerCase()}`)}>
        <img src={process.env.RESOURCE_URL + category.icon} />
        <p>{category.category_name}</p>
    </div>
)

export default Menu