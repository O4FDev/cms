
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe( 'Home', () =>
{
    it( 'renders a heading', () =>
    {
        render( <Home /> )

        const heading = screen.getByRole( 'heading', {
            name: "Create T3 App",
        } )

        expect( heading ).toBeInTheDocument()
    } )
} )