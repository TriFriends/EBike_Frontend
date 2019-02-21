import React from 'react'
import Link from 'next/link'

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="input-field col s12">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav
