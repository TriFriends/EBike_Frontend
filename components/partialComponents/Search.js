import React from 'react'
import global from 'window-or-global'

class Search extends React.Component {
    state = {
        device: "computer"
    }
    componentDidMount() {
        setTimeout(() => {
            let that = this
            console.log(that)
            onResize(that)
            global.onresize = function () { onResize(that) }
            // global.onscroll = function () { onScroll(that) }
        }, 0)
        function onResize(that) {
            if (parseInt(global.innerWidth) > 1000) {
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
                        <div className="search sticky-bottom" ref={this.props.computerSearch}>
                            <input placeholder="Szukaj" />
                            <div className="search__button">
                                <img src={require("../../static/img/search.svg")} className="search__icon" />
                            </div>
                        </div> :
                        <div className="container row">
                            <div className="search search-computer" ref={this.props.computerSearch}>
                                <input placeholder="Szukaj" />
                                <div className="search__button">
                                    <img src={require("../../static/img/search.svg")} className="search__icon" />
                                </div>
                            </div>
                        </div>

                }
            </React.Fragment>
        )

    }
}

export default Search