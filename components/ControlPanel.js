import React from 'react'

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control-panel">
                <img src={require("../static/img/shopping-cart.svg")} />
                <img src={require("../static/img/man-user.svg")} />
            </div>
        )
    }
}

export default ControlPanel