import React from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import UIControl from '../utils/UIControl'
import { Router } from '../routes'

class Categories extends React.Component {
    state = {
        isDropdown: false,
        elements: {
            categoryButton: React.createRef(),
            categoryList: React.createRef(),
            categories: React.createRef()
        }
    }

    categoryRoute(category) {
        console.log(category)
        Router.pushRoute(`/category/${category}`)
    }

    componentDidMount() {
        root.addEventListener("click", (e) => {
            const isOverButton = UIControl.isOver({
                element: this.state.elements.categoryButton,
                mouse: e
            })
            const isOverUL = UIControl.isOver({
                element: this.state.elements.categoryList,
                mouse: e
            })
            if (this.state.isDropdown && !isOverButton && !isOverUL) {
                console.log("asd")
                this.setState({
                    isDropdown: !this.state.isDropdown
                })
            }
        })

        window.addEventListener("resize", () => {
            this.setState({
                isDropdown: false
            })
        })
    }

    drop() {
        console.log(this.state.isDropdown)
        this.setState({
            isDropdown: true
        })
    }

    pick(e) {
        console.log(e)
        let isOverCategories = UIControl.isOver({
            element: this.state.elements.categories,
            mouse: e
        })
        if (!isOverCategories) {
            this.setState({
                isDropdown: false
            })
        }

    }


    render() {
        return (
            <div className="categories" ref={this.state.elements.categories} onMouseOut={this.pick.bind(this)}>
                <img onMouseOver={this.drop.bind(this)} src={require("../static/img/menu.svg")} className="category__button" ref={this.state.elements.categoryButton} />
                {
                    this.state.isDropdown ?
                        <ul ref={this.state.elements.categoryList}>
                            {
                                this.props.categories.map((value, index) => (
                                    <li key={index} onClick={this.categoryRoute.bind(this, value.category_name)}>{value.category_name}</li>
                                ))
                            }
                        </ul> :
                        ''
                }

            </div>
        )
    }
}


Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories