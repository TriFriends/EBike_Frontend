import React from 'react'

class View extends React.Component {
    render() {
        return (
            <div className="container" ref={this.props.main}>
                {this.props.children}
            </div>
        )
    }
}

export default View