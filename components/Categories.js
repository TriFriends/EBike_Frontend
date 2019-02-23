import React from 'react'
import PropTypes from 'prop-types'

const Categories = ({ categories }) => (
    <div className="container categories">
        <div className="row">
            {
                categories.map((value, index) => (
                    <Category key={index} category={value} />
                ))
            }
        </div>
    </div>
)

const Category = ({ category }) => (
    <div className="col s6 m5 l2">
        <div className="categories__item">
            {category.category_name}
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