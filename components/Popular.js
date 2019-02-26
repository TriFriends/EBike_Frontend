import React from 'react'
import UIControl from '../utils/UIControl'

class Popular extends React.Component {
    render() {
        console.log(this.props.popular)
        return (
            <div className="popular">
                <h1>Popularne</h1>
                <div className="row">
                    {
                        this.props.popular.map((value, index) => (
                            <PopularItem item={value} key={index} />
                        ))
                    }
                </div>

            </div>
        )

    }
}

const PopularItem = ({ item }) => (
    <div className="card">
        <div className="card__image">
            <img src={item.hero_image} />
        </div>
        <div className="card__content">
            <p>
                Kupiono przez {item.bought} osób
            </p>
            <div className="rating-box">
                <div className="rating-star empty-star">

                </div>
                <div className="rating-star empty-star">

                </div>
                <div className="rating-star empty-star">

                </div>
                <div className="rating-star empty-star">

                </div>
                <div className="rating-star empty-star">

                </div>
            </div>
            <button className="card__price">
                Kup za {UIControl.validPrice(item.price)}
            </button>
        </div>
    </div>
)

export default Popular