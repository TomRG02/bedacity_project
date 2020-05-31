import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import '../styles/team.scss'

const TeamPage = () => {  
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        nodes {
          name
          track
          abilities
          src {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <h2>Our Team Group</h2>
      <p>This is a team page!</p>      
      
      <div className="container-fluid">
          <div className="row">
              { /* Map JSON */
                  data.allTeamJson.nodes.map(member => (
                      <div className="col-md-6">
                          <div className="card mx-auto">
                              <div className="card-body">
                                  <Img className="card-img" fluid={member.src.childImageSharp.fluid} />
                                  <h5 className="card-title">{member.name}</h5>
                                  <p className="card-text"><strong>Track:</strong> {member.track}</p>
                                  <p className="card-text"><strong>Abilities: </strong>{member.abilities}</p>
                              </div>
                          </div>                                
                      </div>    
                  ))
              } {/* End Map JSON */}
          </div> {/* End Row */}
      </div> {/* End Container-Fluid */}
    </Layout>
  )
}

export default TeamPage