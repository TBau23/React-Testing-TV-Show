import React from 'react';
import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

import { fetchShow as mockFetchShow } from './api/fetchShow'


jest.mock('./api/fetchShow') // creates new mock function of all exports that live in a given folder

const episodeData = {
    episodes: [{
        id: 1752754,
        url: 'http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club',
        name: 'Chapter One: The Hellfire Club',
        season: 4,
        number: 1,
        airdate: '',
        airtime: '',
        airstamp: null,
        runtime: 60,
        image: null,
        summary: null,
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/1752754'
          }
        }
      }]
}

mockFetchShow.mockResolveValue(episodeData)

test('Render without error', () => {
    render(<App />)
})

test('Render episodes when API is called', async () => {

    

    render(<App />)

    await screen.findAllByText(/stranger things/i)

    const dropdown = await screen.findByText(/select a season/i)
    userEvent.click(dropdown)

    const season4 = await screen.findByText(/season 4/i)
    userEvent.click(season4)

    const ep4 = await screen.findAllByText(/the hellfire club/i)
    expect(ep4[0]).toBeVisible()
})


