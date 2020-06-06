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
              fluid(maxWidth: 1000) {
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
      <div style={{margin: "0 1.5rem"}}>
        <h1>Our Team Group</h1>       
        <div className="container-fluid">
            <div className="row">
                { /* Map JSON */
                    data.allTeamJson.nodes.map(member => (
                        <div className="col-md-4">
                            <div className="card mx-auto">
                                <div className="card-body">
                                    <Img className="card-img img-fluid" fluid={member.src.childImageSharp.fluid} />
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
      </div>
    </Layout>
  )
}

export default TeamPage