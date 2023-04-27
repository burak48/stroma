import React from 'react' // eslint-disable-line
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './index'

test('renders login texts', async () => {
    const {findAllByText} = render(<Login />)
    const loginTexts = await findAllByText(/Login/)
    expect(loginTexts).toHaveLength(2)
})

test('fill in form fields and submit form', () => {
    const {getByPlaceholderText} = render(<Login />)
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')

    fireEvent.change(emailInput, {target: {value: 'test@test.com'}})
    fireEvent.change(passwordInput, {target: {value: '123'}})

    expect(emailInput).toHaveValue('test@test.com')
    expect(passwordInput).toHaveValue('123')
})
