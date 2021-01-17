import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
export default class Education extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                <p >{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
                </Grid>
            </div>
        )
    }
}
