import React, { Component } from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display:'flex'}}>
                            {this.props.skill}
                            <ProgressBar style={{margin:'auto',width:'75%'}} progress={this.props.progress} />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
