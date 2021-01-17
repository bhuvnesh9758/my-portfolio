import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends Component {
    render() {
        return (
            <div>
            <Grid>
            <Cell col={4}>
            <div style={{textAlign:'center'}} className='resume-img'>
            <img
            src="https://cdn3.iconfinder.com/data/icons/many-peoples-vol-2/512/10-512.png"
            alt="avatar"
            style={{height:'250px'}}
            />
            <h2 style={{paddingTop:'2em'}}>Bhuvnesh Sharma</h2>
            <h4 style={{color:'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%',margin:'auto'}}/>
            <p style={{width:'50%',margin:'auto',wordBreak:'break-all'}}>and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
            , when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%',margin:'auto'}}/>
            <h5>Phone</h5>
            <p>(+91)9758931402</p>
            <h5>Email</h5>
            <p>bhuvneshsharma9758@gmail.com</p>
            <h5>Address</h5>
            <p>Tappal,Aligarh,UP</p>
            <hr style={{borderTop:'3px solid #833fb2',width:'50%',margin:'auto'}}/>
            </div>
            </Cell>
            <Cell className="resume-right-cell" col={8}>
                <h2>Education</h2>
                <Education
                startYear="2014"
                endYear="2016"
                schoolName="Aligarh Muslim University"
                schoolDescription="and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
                , when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book." />
                <Education
                startYear="2016"
                endYear="2020"
                schoolName="Jamia Millia Islamia"
                schoolDescription="and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
                , when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book." />
                <hr style={{borderTop:'3px solid #e22947'}}/>
                <h2>Experience</h2>
                <Experience 
                startYear="2016"
                endYear="2020"
                jobName="Innovaccer"
                jobDescription="and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
                , when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book."
                />
                <Experience 
                startYear="2016"
                endYear="2020"
                jobName="Innovaccer"
                jobDescription="and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
                , when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book."
                />
                <hr style={{borderTop:'3px solid #e22947'}}/>
                <h2>Skills</h2>
                <Skills
                skill="JavaScript"
                progress="80" />
                <Skills
                skill="Nodejs"
                progress="60" />
                <Skills
                skill="React"
                progress="80" />
                <Skills
                skill="C++"
                progress="100" />
            </Cell>
            </Grid>
            </div>
            )
        }
    }
    