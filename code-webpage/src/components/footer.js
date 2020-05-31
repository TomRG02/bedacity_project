import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import footerStyles from '../styles/footer.module.scss'

var emoji = require('node-emoji')

const Footer = () => {
    const data = useStaticQuery(graphql`
        query	{
            site {
                siteMetadata {
                    author
                }
            }
        }
  `)

    return(        
        <footer className={footerStyles.footer}>            
            <p>Created with {emoji.get(':heart:')} and {emoji.get(':muscle:')} by {data.site.siteMetadata.author} © 2020</p>
        </footer>        
    )
}

export default Footer