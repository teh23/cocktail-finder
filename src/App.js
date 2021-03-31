import 'bulma/css/bulma.css'
import React, { useEffect } from 'react'
import Top from './components/Top'
import Content from './components/Content'
import './App.sass'
import { useDispatch } from 'react-redux'
import { fetchFilters } from './reducers/filtersReducer'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilters())
    }, [dispatch])
    return (
        <div>
            <Top />
            <Content />
        </div>
    )
}
export default App
