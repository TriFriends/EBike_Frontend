import React, { createRef } from 'react'

class View extends React.Component {
    state = {
        refs: {
            main: React.createRef()
        }
    }
    render() {
        return (
            <div className="container main">
                {this.props.children}
            </div>
        )
    }
}

export default View