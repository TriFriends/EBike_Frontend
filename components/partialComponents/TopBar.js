import React from 'react'
import Menu from './Menu'
import ControlPanel from './ControlPanel'


const TopBar = ({ categories, homeRoute }) => (
    <div className="hero-wrapper">
        <div className="container">
            <div className="hero">
                <Menu categories={categories} />
                <img
                    src="static/img/nowy.png"
                    className="hero__logo"
                    onClick={() => homeRoute} />
                <ControlPanel />
            </div>
        </div>
    </div>
)


export default TopBar