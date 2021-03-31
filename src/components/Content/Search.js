import React, { useState } from 'react'

const Search = ({ what, kind, value, setValue }) => {
    const [search, setSearch] = useState('')
    const onSearch = (e) => {
        setSearch(e.target.value)
        const filtr = what.filter((row) => {
            return search === ''
                ? row[kind]
                : row[kind].toLowerCase().includes(e.target.value.toLowerCase())
        })

        setValue({ ...value, filtr })
    }

    return (
        <input
            className="input"
            onChange={onSearch}
            value={search}
            placeholder={'search..'}
        />
    )
}

export default Search
