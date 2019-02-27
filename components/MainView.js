import React from 'react'

class MainView extends React.Component{
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

export default MainView