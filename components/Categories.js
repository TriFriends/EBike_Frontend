import React from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import UIControl from '../utils/UIControl'
import Router from '../routes'

class Categories extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="categories">
                {
                    this.props.categories.map((category, index) => (
                        <Category category={category} key={index} />
                    ))
                }
            </div>
        )
    }
}

const Category = ({ category }) => {
    console.log(category)
    return (
        <div className="category">
            <h5>{category.category_name}</h5>
        </div>
    )
}


Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories