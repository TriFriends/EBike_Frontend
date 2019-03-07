import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <img src={require("../static/img/menu.svg")} />
            </div>
        )
    }
}

export default Menu