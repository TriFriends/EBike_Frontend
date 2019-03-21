import React from 'react'
import global from 'window-or-global'
import { Link } from "../routes"
import { MyDropdown } from './DropDown'

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
                if (document.querySelector(".menu .pop-up")) {
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
                }
            })
        })
    }

    changeIsPopUp() {
        this.setState({
            isPopUp: !this.state.isPopUp
        })
        let hero = document.querySelector(".hero")
        console.log(hero)
        process.nextTick(() => {
            let heroHeight
            try {
                heroHeight = parseInt(window.getComputedStyle(hero, null).getPropertyValue("height"))
                    + "px"
            } catch (e) {
                console.log(e)
                heroHeight = hero.getBoundingClientRect().height + "px"
            }

            this.state.refs.menuPopUp.current.style.top = heroHeight
        })

    }

    changeIsDropDown() {
        this.setState({
            isDropDown: !this.state.isDropDown
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
                                <div className="pop-up__item">Home</div>
                                <div className="pop-up__item categories-mobile">
                                    <p onClick={this.changeIsDropDown.bind(this)}>Kategorie</p>
                                    <MyDropdown className="Dropdown" open={this.state.isDropDown}>
                                        {
                                            this.props.categories.map((value, index) => {
                                                return (
                                                    <div key={index} className="categories__item">
                                                        <Link route="category" category={value.category_name}>
                                                            <a>{value.category_name}</a>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </MyDropdown>
                                </div>
                            </div>
                        : ""
                }
            </div>
        )
    }
}

export default Menu