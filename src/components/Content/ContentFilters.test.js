import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ContentFilters from './ContentFilters'

test('render content', () => {
    const component = render(<ContentFilters title={'Testing'} />)
    expect(component.container).toHaveTextContent('Testing')
})
