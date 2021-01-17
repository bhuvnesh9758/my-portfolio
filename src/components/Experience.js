import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                <p >{this.props.startYear}-{" "+this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
                </Grid>
            </div>        )
    }
}
