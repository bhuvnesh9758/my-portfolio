import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme-body">
            <Grid className="aboutme-grid">
            <Cell col={12}>
            <h2>About Me</h2>
            <hr style={{width:'50%',borderTop:'3px solid white'}}/>
            <p>typesetting industry. Lorem Ipsum has been the
            industry's standard typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
            , when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book dummy text ever since the 1500s
            , when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
            </Cell>
            </Grid>
            </div>
            )
        }
    }
    