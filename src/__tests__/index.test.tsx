import Home from "../pages/index";
import { render, screen } from "@testing-library/react"
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";
jest.mock( "next-auth/react" );

describe( "Layout", () =>
{
    it( "renders correctly when signed in", () =>
    {
        const mockSession = {
            expires: new Date(Date.now() + 2 * 86400).toISOString(),
            user: { email: "luke.lucas@ou.ac.uk" },
        };
        (useSession as jest.Mock).mockReturnValueOnce( [mockSession, 'authenticated'] );
        render( <Home /> )
        const heading = screen.getByRole("heading", {
            name: "Create T3 App luke.lucas@ou.ac.uk",
        });
        
        expect(heading).toBeInTheDocument();
    } )
} )