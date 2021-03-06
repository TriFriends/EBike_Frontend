import React from 'react'

class MainView extends React.Component {
    render() {
        return (
            <div className="row container" ref={this.props.mainRef}>
                {this.props.children}
            </div>
        )
    }
}

export default MainView