/* eslint-env jest */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'

import Home from './Home'

describe('Home component', () => {
  beforeEach(() => {
    cleanup()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment(<Home />)).toMatchSnapshot()
  })

  it('renders', () => {
    const { queryByTestId } = render(<Home />)

    expect(queryByTestId('homepage').textContent).toBe(true)
  })
})
