import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Salvador',
      slug: 'salvador',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/salvador/i)).toBeInTheDocument
  })
})
