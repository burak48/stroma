import React from 'react' // eslint-disable-line
import {render, screen} from '@testing-library/react'
import {expect, test} from '@jest/globals'
import App from './App'

test('should have two Login texts in DOM', async () => {
    render(<App />)
    const linkElement = await screen.findAllByText(/Login/)
    expect(linkElement).toHaveLength(2)
})
