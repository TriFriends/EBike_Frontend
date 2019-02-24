import React from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import UIControl from '../utils/UIControl'

class Categories extends React.Component {
    state = {
        isDropdown: false,
        elements: {
            categoryButton: React.createRef(),
            categoryList: React.createRef()
        }
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
    }
    dropdown() {
        console.log(this.state.isDropdown)
        this.setState({
            isDropdown: !this.state.isDropdown
        })
    }
    render() {
        return (
            <div className="categories">
                <img onClick={this.dropdown.bind(this)} src={require("../static/img/menu.svg")} className="category__button" ref={this.state.elements.categoryButton} />
                {
                    this.state.isDropdown ?
                        <ul ref={this.state.elements.categoryList}>
                            {
                                this.props.categories.map((value, index) => (
                                    <li key={index}>{value.category_name}</li>
                                ))
                            }
                        </ul> :
                        ''
                }

            </div>
        )
    }
}


const Category = ({ category }) => (
    <div className="col">
        <div className="categories__item">
            <h6>
                {category.category_name}
            </h6>
        </div>

    </div>
)

Categories.propTypes = {
    categories: PropTypes.array
}

Category.propTypes = {
    category: PropTypes.object
}

export default Categories