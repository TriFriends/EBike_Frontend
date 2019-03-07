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
            <img src={process.env.RESOURCE_URL + item.hero_image} />
        </div>
        <div className="card__content">
            <p>
                Kupiono przez {item.bought} osób
            </p>
            <div className="rating-box">
                <div className={`rating label-bottom color-ok value-${parseInt(item.average_rate)}`}>
                    <div className="label-value">{item.average_rate.toFixed(2)} ({item.bought})</div>
                    <div className="star-container">
                        <div className="star">
                            <svg className="star-empty">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-empty"></use>
                            </svg>
                            <svg className="star-filled">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-filled"></use>
                            </svg>
                        </div>
                        <div className="star">
                            <svg className="star-empty">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-empty"></use>
                            </svg>
                            <svg className="star-filled">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-filled"></use>
                            </svg>
                        </div>
                        <div className="star">
                            <svg className="star-empty">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-empty"></use>
                            </svg>
                            <svg className="star-filled">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-filled"></use>
                            </svg>
                        </div>
                        <div className="star">
                            <svg className="star-empty">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-empty"></use>
                            </svg>
                            <svg className="star-filled">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-filled"></use>
                            </svg>
                        </div>
                        <div className="star">
                            <svg className="star-empty">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-empty"></use>
                            </svg>
                            <svg className="star-filled">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../static/img/star-rating.icons.svg#star-filled"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <button className="card__price">
                Kup za {UIControl.validPrice(item.price)}
            </button>
        </div>
    </div>
)

export default Popular