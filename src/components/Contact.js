import React, { Component } from 'react'
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Bhuvnesh Sharma</h2>
            <img 
            src="https://cdn3.iconfinder.com/data/icons/many-peoples-vol-2/512/10-512.png"
            alt="avatar"
            style={{height:'250px'}}/>
            <p style={{width:'75%',margin:'auto' ,paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
            , when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.
            It has survived not only five centuries</p>
            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
            <List>
            <ListItem>
            <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                <i className="fa fa-envelope"/>
                xyz@gmail.com
                </ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                <i className="fab fa-linkedin"/>
                linkedin</ListItemContent>
            </ListItem>
            <ListItem>
            <ListItemContent style={{fontFamily:'Anton',fontSize:'25px'}}>
                <i className="fab fa-github-square"/>
                github</ListItemContent>
            </ListItem>
            </List>

            </div>            
            </Cell>
            </Grid>
            </div>
            )
        }
    }
    