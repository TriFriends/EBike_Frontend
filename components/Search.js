import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <label>Znajdź</label>
                <input type="text" className="search__input" />
                <button></button>
            </div>
        )

    }
}

export default Search