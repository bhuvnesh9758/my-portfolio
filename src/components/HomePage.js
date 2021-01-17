import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'

export default class HomePage extends Component {
    render() {
        return (
            <div style={{width:'100%' ,margin:'auto'}}>
                <Grid className="homepage-grid">
                    <Cell col={12}>
                        <img 
                        src="https://www.emsateknik.com.tr/wp-content/uploads/2018/01/avatar-png-1-450x450.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                <div className="banner-text">
                    <h1>Full stack web developer</h1>
                    <hr/>
                    <p>HTML/CSS | React | Node | Express | MongoDB | Firebase | Git | JavaScript</p>
                    <div className="social-links">
                        {/**Linkedin */}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                        {/* <i class="fab fa-linkedin-square" aria-hidden="true"></i> */}
                        </a>
                        {/**github */}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-square" aria-hidden="true"></i>
                        </a>
                        {/**codechef */}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-code"></i>
                        </a>
                        {/**github */}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
