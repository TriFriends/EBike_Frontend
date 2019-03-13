import React from 'react'
import global from 'window-or-global'

class Search extends React.Component {
    state = {
        device: "computer"
    }
    componentDidMount() {

        console.log(parseInt(global.innerWidth) < 800)
        setTimeout(() => {
            let that = this
            console.log(that)
            onResize(that)
            global.onresize = function () { onResize(that) }
        }, 0)
        function onResize(that) {
            console.log(that)
            if (parseInt(global.innerWidth) > 800) {
                that.setState({
                    device: "computer"
                })
            } else {
                that.setState({
                    device: "mobile"
                })
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.device == "mobile" ?
                        <div className="search sticky-bottom">
                            <input placeholder="Szukaj" />
                            <div className="search__button">
                                <img src={require("../static/img/search.svg")} className="search__icon" />
                            </div>
                        </div> :
                        <div className="container">
                            <div className="search">
                                <input placeholder="Szukaj" />
                                <div className="search__button">
                                    <img src={require("../static/img/search.svg")} className="search__icon" />
                                </div>
                            </div>
                        </div>

                }
            </React.Fragment>
        )

    }
}

export default Search