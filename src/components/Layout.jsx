/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Nav from "./NavBar";
import Footer from "./Footer"

const Layout = ({ children }) => {

    return (
        <>
        <header>
            <Nav />
        </header>
        <div>
            <main>{children}</main>
            <Footer />
        </div>
        </>
    )
}

export default Layout
