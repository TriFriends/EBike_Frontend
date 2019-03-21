import React from 'react'

import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export function MyDropdown(props) {
    return (
        <SlideDown className="my-dropdown">
            {props.open ? props.children : null}
        </SlideDown>
    )
}