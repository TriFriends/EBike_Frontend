import React from 'react'
import global from 'window-or-global'
import { Link } from "../routes"

class Menu extends React.Component {
    state = {
        isPopUp: false
    }

    changeIsPopUp() {
        this.setState({
            isPopUp: !this.state.isPopUp
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="menu">
                <img src={require("../static/img/menu.svg")} onClick={this.changeIsPopUp.bind(this)} />
                {
                    this.state.isPopUp ?
                        global.innerWidth > 1000 ?
                            <div className="">
                                asd
                            </div>
                            :
                            <div className="pop-up">
                                <div className="pop-up__item">Home</div>
                                <div className="pop-up__item categories-mobile">
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
                                </div>
                            </div>
                        : ""
                }
            </div>
        )
    }
}

export default Menu