/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
     
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
       <span className="layoutTitle">Gatsby Testing Site</span>
      <nav>
        <ul className="navLinks">
          <li className="navLinkItem">
            <Link to="/" className="navLinkItem">
              Home
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/about" className="navLinkItem">
              About
            </Link>
          </li>
          <li className="navLinkItem">
            <Link to="/blog" className="navLinkItem">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
