import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query	{
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)
  
  return(
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
          </div>
          <div class="col-md-8 align-middle">            
            <p className={headerStyles.subtitle}>{data.site.siteMetadata.description}</p>
          </div>
        </div>
      </div>     
    </header>
  )
}

export default Header


/* 
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
 */