import React from 'react'
import Layout from '../components/layout'
import ICUbed from '../images/icu-bed.jpg'
import GermanyMap from '../images/germany-icu-beds.png'
import Covid from '../images/covid-2020.jpg'
import '../styles/challenge.scss'


const ChallengePage = () => {    
    return(
        <Layout>
            <div style={{margin: "0 1.5rem"}}>
                <h1>About Challenge</h1>
                <br/>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-9 mx-auto">
                            <h4>Which is the problem the solution solves?</h4>
                            <p>During the COVID-19 pandemic, the concern of many governments is in the low hospital capacity (ICU beds, respirators, medical personnel, supplies) installed in their countries, which could collapse due to a very high contagion outbreak (especially in developing countries). The problem studied in this project consists of the lack of information and communication of the hospital capacity and/or the number of beds available in the health centers of a region.</p>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <img src={ICUbed} className="img-style" alt="Clinical ICU Bed" />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-3 mx-auto">
                            <img src={GermanyMap} className="img-style" alt="Clinical ICU Bed" />
                        </div>
                        <div class="col-md-9 mx-auto">
                            <h4>The solution</h4>
                            <p>Proposed solution consists of the design of an interface that allows users to be provided with information on the availability and capacity of beds and personnel in hospitals near their area, in a friendly and effective way. For this, competences of the four learning tracks (AI, UX, WebDev, and Data Science) are applied in the construction of a website (under construction) based on the interface mentioned above, in order to access the amount of desired users. For this project, we took Germany as a case study. The data was taken from DIVI-Intensivregister, which provides updated information through an API. Our objective was to apply all the knowledge acquired during the bootcamp (and increase it during the development of the project) to achieve the greatest advance in the construction of the interface and the platform.</p>
                        </div>                        
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-9 mx-auto">
                            <h4>Impact on the crisis</h4>
                            <p>Recently, there has been an alarming outbreak of infections and deaths from COVID-19 in Latin America and some countries in Europe and Asia. Lack of access to information in developing countries exacerbates the situation. With this solution we want to provide open access alternatives that allow monitoring the state and capacity of hospitals in multiple regions, to guide decision-makers and users on the measures they should take. Although our case study (Germany) has portals that provide data related to bed availability, in many developing countries facing serious problems due to the pandemic this information is almost null; our solution would incentivize open data and present the information in a clear way, for governments, researchers, students, doctors, and all those interested in contributing to the total solution of the pandemic.</p>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <img src={Covid} className="img-style" alt="Clinical ICU Bed" />
                        </div>
                    </div>
                </div>                                
            </div>
        </Layout>
    )
}

export default ChallengePage