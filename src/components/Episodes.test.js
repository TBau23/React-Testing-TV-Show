import React from 'react';
import { render, screen } from "@testing-library/react"
import Episodes from './Episodes'


const episodeData = [{
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

test('Renders episode component without errors', () => {
    render(<Episodes episodes={[]}/>)
});

test("Rerenders with new props", () => {

    const { rerender } = render(<Episodes episodes={[]} />)

    rerender(<Episodes episodes={episodeData}/>)

    const episodeList = screen.getAllByTestId(/episodes/i)

    expect(episodeList).toHaveLength(1)


})