import React from 'react'

class View extends React.Component{
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default View